import { Contact } from "../entities/contacts";
import { AppDataSource } from "../data-source";
import AppError from "../errors/appError";
import { NextFunction, Request, Response } from "express";

//Middleware para verificar o id dos >contatos<.

const verifyIdMiddleware = async (req: Request, res: Response, next: NextFunction) => {

	const id = req.params.id;
	const repository = AppDataSource.getRepository(Contact);
	const foundContact = await repository.findOne({
		where: { id: id },
		relations: { users: true },
	});

	if (req.user.id === foundContact.users.id) {
		next() 
	}
	else { 
		throw new AppError("You don't have authorization", 401) 
	}
};


export default verifyIdMiddleware;