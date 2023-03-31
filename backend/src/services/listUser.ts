import { User } from "../entities/users";
import { IUser } from "../interfaces/user";
import { AppDataSource } from "../data-source";

const listUserService = async (id: string): Promise<IUser> => {
	
	const repository = AppDataSource.getRepository(User);
	const foundUser = await repository.findOneBy({ id: id });

	return foundUser;
};

export default listUserService;
