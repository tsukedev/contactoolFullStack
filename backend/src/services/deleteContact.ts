import AppError from "../errors/appError";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contacts";

const deleteContactService = async (id: string, ctId: string): Promise<any> => {
	
	const repository = AppDataSource.getRepository(Contact);
	const foundContact = await repository.findOne({
		where: { id: ctId },
		relations: { users: true },
	});

	if (foundContact.users.id !== id) {
		throw new AppError("You don't have authorization", 401);
	}

	if (!foundContact) {
		throw new AppError("This contact was not found", 404);
	}

	await repository.delete(foundContact.id);
};

export default deleteContactService;