import AppError from "../errors/appError";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contacts";
import { IContactUpdate } from "../interfaces/contacts";

const updateContactService = async (id: string, data: IContactUpdate): Promise<string> => {

	const repository = AppDataSource.getRepository(Contact);
	const foundContact = await repository.findOneBy({ id: id });

	if (!foundContact) {
		throw new AppError("This contact was not found", 404);
	}

	await repository.update(foundContact.id, {
		name: data.name ? data.name : foundContact.name,
		email: data.email ? data.email : foundContact.email,
		cellphone: data.cellphone ? data.cellphone : foundContact.cellphone,
	});

	return "This Contact was successfully updated";
};


export default updateContactService;