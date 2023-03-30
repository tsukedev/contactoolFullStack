export interface IContact {
	id: string;
	name: string;
	email: string;
	cellphone: string;
	createdAt: Date;
}

export interface IContactRequest {
	name: string;
	email: string;
	cellphone: string;
}

export interface IContactUpdate {
	name?: string;
	email?: string;
	cellphone?: string;
}