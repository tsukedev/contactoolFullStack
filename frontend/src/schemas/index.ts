import * as yup from "yup";

export const registerSchema = yup.object().shape({
	name: yup.string().required(),
	password: yup.string().required(),
	cellphone: yup.string().required(),
	email: yup.string().required().email(),
	confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

export const registerContact = yup.object().shape({
	name: yup.string().required(),
	cellphone: yup.string().required(),
	email: yup.string().required().email(),
});

export const loginSchema = yup.object().shape({
	password: yup.string().required(),
	email: yup.string().required().email(),
});

export const modifyUser = yup.object().shape({
	name: yup.string(),
	email: yup.string(),
	cellphone: yup.string(),
});


