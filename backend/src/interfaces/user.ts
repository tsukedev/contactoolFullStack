export interface IUser {
	id: string;
	name: string;
	email: string;
	password: string;
	cellphone: string;
	createdAt: Date;
}

export interface IUserLogin {
	email: string;
	password: string;
}

export interface IUserRequest {
	name: string;
	email: string;
	password: string;
	cellphone: string;
}

export interface IUserUpdate {
	name?: string;
	email?: string;
	password?: string;
	cellphone?: string;
}
