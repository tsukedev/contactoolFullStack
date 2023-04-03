import Form from "./styles";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { registerContact } from "../../../schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { INewContact, useContacts } from "../../../context/ContactContext";

const AddContactDiv = () => {
	
	const { newContact } = useContacts();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<INewContact>({ resolver: yupResolver(registerContact) });
	const onError = () => toast.error("Erro");
	const onSubmit = handleSubmit(newContact, onError);

	return (
		<Form onSubmit={onSubmit}>
			<h3>Novo Contato</h3>
			<div>
				<label className="name">
					<input type="text" placeholder="Nome do contato" {...register("name")} />
				</label>
				<label className="email">
					<input type="text" placeholder="Email do contato" {...register("email")}/>
				</label>
				<label className="cellphone">
					<input type="text" placeholder="Número do contato" {...register("cellphone")}/>
				</label>
			</div>

			<button type="submit">Adicionar Contato</button>
		</Form>
	);
};

export default AddContactDiv;
