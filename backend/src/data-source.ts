import "dotenv/config";
import { DataSource } from "typeorm";
import { User } from "./entities/users";
import { Contact } from "./entities/contacts";
import { initial1680210599377 } from "./migrations/1680210599377-initial";

export const AppDataSource = new DataSource(
	process.env.NODE_ENV === "test"
		? {
			type: "sqlite",
			synchronize: true,
			database: ":memory:",
			entities: ["src/entities/**/*.ts"],
		}
		: {
			type: "postgres",
			host: process.env.HOST,
			port: parseInt(process.env.PGPORT!),
			username: process.env.POSTGRES_USER,
			password: process.env.POSTGRES_PASSWORD,
			database: process.env.POSTGRES_DB,
			logging: true,
			synchronize: false,
			entities: [User, Contact],
			migrations: [initial1680210599377]
		}
);
