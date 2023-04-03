import * as yup from "yup";
import { SchemaOf } from "yup";
import { IContactRequest, IContactUpdate } from "../interfaces/contacts";

const contactSchema: SchemaOf<IContactRequest> = yup.object().shape({
	name: yup.string().required("Name required"),
	email: yup.string().email().required("Email required"),
	cellphone: yup.string().required("cellphone required"),
});

const contactUpdateSchema: SchemaOf<IContactUpdate> = yup.object().shape({
	name: yup.string(),
	email: yup.string().email(),
	cellphone: yup.string(),
});

export { contactSchema, contactUpdateSchema };
