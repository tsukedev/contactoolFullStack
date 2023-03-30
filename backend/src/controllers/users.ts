import { IUser } from "../interfaces/user";
import { Request, Response } from "express";
import { IUserUpdate } from "../interfaces/user";
import listUserService from "../services/listUser";
import createUserService from "../services/createUser";
import deleteUserService from "../services/deleteUser";
import updateUserService from "../services/updateUser";

const createUserController = async (req: Request, res: Response) => {
	
	const data: IUser = req.body;
	const createdUser = await createUserService(data);

	return res.status(201).json(createdUser);
};

export default createUserController;

const listUserController = async (req: Request, res: Response) => {
	
	const id = req.user.id;
	const listUser = await listUserService(id);

	return res.status(200).json(listUser);
};

const deleteUserController = async (req: Request, res: Response) => {
	
	const id = req.user.id;
	await deleteUserService(id);

	return res.status(204).send();
};

const updateUserController = async (req: Request, res: Response) => {
	
	const id = req.user.id;
	const data: IUserUpdate = req.body;
	const updated = await updateUserService(id, data);

	return res.json({ message: "Your account was successfully updated" });
};

export { createUserController, listUserController, deleteUserController, updateUserController };
