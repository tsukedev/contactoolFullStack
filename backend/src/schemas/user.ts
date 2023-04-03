import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserLogin, IUserRequest, IUserUpdate } from "../interfaces/user";

const userSchema: SchemaOf<IUserRequest> = yup.object().shape({
	name: yup.string().required("Name required"),
	email: yup.string().email().required("Email required"),
	password: yup.string().required("Password required"),
	cellphone: yup.string().required("cellphone required"),
});

const userLoginSchema: SchemaOf<IUserLogin> = yup.object().shape({
	email: yup.string().email().required("Email required"),
	password: yup.string().required("Password required"),
});

const userUpdateSchema: SchemaOf<IUserUpdate> = yup.object().shape({
	name: yup.string(),
	email: yup.string().email(),
	password: yup.string(),
	cellphone: yup.string(),
});

export { userSchema, userLoginSchema, userUpdateSchema };
