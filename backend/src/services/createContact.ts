import { User } from "../entities/users";
import AppError from "../errors/appError";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contacts";
import { IContact } from "../interfaces/contacts";

const createContactService = async ( id: string, data: IContact): Promise<IContact> => {
	
	const repository = AppDataSource.getRepository(User);
	const ctRepository = AppDataSource.getRepository(Contact);
	const foundUser = await repository.findOneBy({ id: id });

	if (!foundUser) {
		throw new AppError("This user was not found", 404);
	}

	const createdcontact = ctRepository.create({
		...data,
		users: foundUser,
	});

	await ctRepository.save(createdcontact);

	return createdcontact;
};

export default createContactService;
