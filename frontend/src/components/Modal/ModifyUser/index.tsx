import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { modifyUser } from "../../../schemas";
import { IModifyUser, useUser } from "../../../context/UserContext";
import { useAuth } from "../../../context/AuthContext";
import Form from "./styles";

const ModifyUser = () => {
	
	const { user } = useAuth();
	const { updateUser, deleteUser, setModal } = useUser();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IModifyUser>({ resolver: yupResolver(modifyUser) });

	return (
		<Form onSubmit={handleSubmit(updateUser)}>
			<section>
				<h3>Editar Usuário</h3>
				<span onClick={() => setModal(null)}>x</span>
			</section>
				<label htmlFor="name">
					<input id="name" {...register("name")} placeholder="Nome" />
				</label>
				<label htmlFor="email">
					<input id="email" {...register("email")} placeholder="Email"/>
				</label>
				<label htmlFor="cellphone">
					<input id="cellphone" {...register("cellphone")} placeholder="Número/Contato" />
				</label>
				<div>
					<button type="submit">Salvar Usuário</button>
					<button className="delete" onClick={deleteUser}>Deletar Usuário</button>		
				</div>
		</Form>
	);
};

export default ModifyUser;
