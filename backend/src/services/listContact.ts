import { User } from "../entities/users";
import { AppDataSource } from "../data-source";
import { IContact } from "../interfaces/contacts";

const listContactService = async (id: string): Promise<IContact[]> => {
	
	const repository = AppDataSource.getRepository(User);
	const foundUser = await repository.findOneBy({ id: id });

	return foundUser.contacts;
};

export default listContactService;
