import "dotenv/config";
import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import { User } from "../entities/users";
import AppError from "../errors/appError";
import { AppDataSource } from "../data-source";
import { IUserLogin } from "../interfaces/user";

// No login a promise poderia ser any, mas é melhor deixar pré-definida como como "string" p/ receber direto o token. 

const loginUserService = async (data: IUserLogin): Promise<string> => {
	
	const repository = AppDataSource.getRepository(User);
	const foundUser = await repository.findOneBy({ email: data.email });

	if (!foundUser) {
		throw new AppError("Invalid email or password", 403);
	}

	const hashedPassword = await compare(data.password, foundUser.password);
	if (!hashedPassword) {
		throw new AppError("Invalid email or password", 403);
	}

	const token = jwt.sign(
		{ email: foundUser.email },
		process.env.SECRET_KEY,
		{
			subject: foundUser.id,
		}
	);

	return token;
};

export default loginUserService;
