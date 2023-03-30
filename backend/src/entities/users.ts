import { hashSync } from "bcryptjs";
import { Contact } from "./contacts";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, BeforeInsert, BeforeUpdate } from "typeorm";

@Entity("users")

export class User {

	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	name: string;

	@Column({ unique: true })
	email: string;

	@Column()
	password: string;

	@Column()
	cellphone: string;

	@CreateDateColumn()
	createdAt: Date;

	@BeforeInsert()
	@BeforeUpdate()
	encryptPassword() {
	  	this.password = hashSync(this.password, 10);
	}
	
	@OneToMany(() => Contact, (contact) => contact.users, { eager: true })
	contacts: Contact[];
}
