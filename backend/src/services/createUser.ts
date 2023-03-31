import { User } from "../entities/users";
import AppError from "../errors/appError";
import { AppDataSource } from "../data-source";
import { IUser, IUserRequest } from "../interfaces/user";

const createUserService = async (data: IUserRequest): Promise<IUser> => {
	
	const repository = AppDataSource.getRepository(User);
	const foundUser = await repository.findOneBy({ email: data.email });

	if (foundUser) {
		throw new AppError("This email already exists", 409);
	}

	const createdUser = repository.create(data)

	await repository.save(createdUser);

	return createdUser;
};

export default createUserService;
