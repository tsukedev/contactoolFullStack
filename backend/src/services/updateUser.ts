import { User } from "../entities/users";
import AppError from "../errors/appError";
import { AppDataSource } from "../data-source";
import { IUserUpdate } from "../interfaces/user";

const updateUserService = async (id: string, data: IUserUpdate): Promise<IUserUpdate> => {
	
	const repository = AppDataSource.getRepository(User);
	const foundUser = await repository.findOneBy({ id: id });

	if (!foundUser) {
		throw new AppError("This user was not found", 404);
	}

	await repository.update(id, {
		name: data.name ? data.name : foundUser.name,
		email: data.email ? data.email : foundUser.email,
		password: data.password ? data.password : foundUser.password,
		cellphone: data.cellphone ? data.cellphone : foundUser.cellphone,
	});

	const user = await repository.findOneBy({ id: id });

	return user;
};

export default updateUserService;
