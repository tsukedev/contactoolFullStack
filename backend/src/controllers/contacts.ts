import { Request, Response } from "express";
import { IUserUpdate } from "../interfaces/user";
import { IContact } from "../interfaces/contacts";
import listContactService from "../services/listContact";
import createContactService from "../services/createContact";
import deleteContactService from "../services/deleteContact";
import updateContactService from "../services/updateContact";
import listOneContactIdService from "../services/listOneContact";

const createContactController = async (req: Request, res: Response) => {

	const useId = req.user.id;
	const data: IContact = req.body;
	const createdContact = await createContactService(useId, data);

	return res.status(201).json(createdContact);
};

const modifyContactController = async (req: Request, res: Response) => {

	const id = req.params.id;
	const data: IUserUpdate = req.body;
	const updatedContact = await updateContactService(id, data);
	return res.json({ message: updatedContact });

};

const deleteContactController = async (req: Request, res: Response) => {

	const id = req.user.id;
	const ctId = req.params.id;
	const data = await deleteContactService(id, ctId);

	return res.status(204).send();
};

const listContactController = async (req: Request, res: Response) => {

	const ctId = req.user.id;
	const data = await listContactService(ctId);

	return res.status(200).json(data);
};

const listOneContactIdController = async ( req: Request, res: Response) => {
	const ctId = req.params.id;
	const data = await listOneContactIdService(ctId);
	return res.status(200).json(data);
};

export { createContactController, modifyContactController, deleteContactController, listContactController, listOneContactIdController };