import { User } from "./users";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm";

@Entity("contacts")

export class Contact {

	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	name: string;

	@Column({ unique: true })
	email: string;

	@Column()
	cellphone: string;

	@CreateDateColumn()
	createdAt: Date;

	@ManyToOne(() => User, (user) => user.contacts, { onDelete: "CASCADE" })
	users: User;
}
