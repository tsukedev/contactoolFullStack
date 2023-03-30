import AppError from "../errors/appError";
import { Contact } from "../entities/contacts";
import { AppDataSource } from "../data-source";

const listOneContactIdService = async (ctId: string) => {

	const repository = AppDataSource.getRepository(Contact);
	const foundContact = await repository.findOneBy({ id: ctId });

	return foundContact;
};

export default listOneContactIdService;