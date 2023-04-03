import Form from "./styles";
import { useForm } from "react-hook-form";
import { modifyUser } from "../../../schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUser } from "../../../context/UserContext";
import { IEditContact, useContacts } from "../../../context/ContactContext";

const ModifyContact = () => {
	
	const { contact, deleteContact, editContact } = useContacts();
	const { setModal } = useUser();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IEditContact>({
		resolver: yupResolver(modifyUser),
	});

	return (
		<>
			<Form onSubmit={handleSubmit(editContact)}>
				<section>
					<h3>Editar Contato:</h3>
					<span onClick={() => setModal(null)}>x</span>
				</section>
				<label htmlFor="name">
					<input id="name" placeholder="Nome" {...register("name")} />
				</label>
				<label htmlFor="email">
					<input id="email" placeholder="Email" type="email" {...register("email")}/>
				</label>
				<label htmlFor="cellphone">
					<input id="cellphone" placeholder="Número/Contato" {...register("cellphone")} />
				</label>
				<div>
					<button type="submit">Salvar Contato</button>
					<button onClick={() => deleteContact(contact.id)}>Excluir Contato</button>
				</div>
			</Form>
		</>
	);
};

export default ModifyContact;
