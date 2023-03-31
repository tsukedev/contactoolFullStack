import { User } from "../entities/users";
import AppError from "../errors/appError";
import { AppDataSource } from "../data-source";

const deleteUserService = async (id: string): Promise<any> => {
	
	const repository = AppDataSource.getRepository(User);
	const foundUser = await repository.findOneBy({ id: id });

	if (!foundUser) {
		throw new AppError("This user was not found", 404);
	}

	await repository.delete(foundUser.id);
};

export default deleteUserService;
