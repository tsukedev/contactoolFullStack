import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Form, Section } from "./styles";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUserRegister, useAuth } from "../../context/AuthContext";

function Register() {
	
	const { registerUser } = useAuth();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IUserRegister>({ resolver: yupResolver(registerSchema) });
	const onError = () => toast.error("Preencha todos os campos corretamente");
	const onSubmit = handleSubmit(registerUser, onError);

	return (
		<Section>
			<Form onSubmit={onSubmit}>
				<h3> Seja bem-vindo!</h3>
				<label htmlFor="Nome">
					<input type="text" id="nome" placeholder="Nome" {...register("name")}/>
				</label>
				<label htmlFor="Email">
					<input type="text" id="email" placeholder="E-mail" {...register("email")}/>
				</label>
				<label htmlFor="Senha">
					<input type="password" id="password" placeholder="Criar senha" {...register("password")}/>
				</label>
				<label htmlFor="Confirmar Senha">
					<input type="password" id="confirm-pass" placeholder="Confirmar senha" {...register("confirmPassword")}/>
				</label>
				<label htmlFor="contato">
					<input type="contato" id="cellphone" placeholder="Contato" {...register("cellphone")}/>
				</label>
				<div>
					<button type="submit">Cadastrar</button>
					<button><Link to={"/login"}>Voltar</Link></button> 				
				</div>
			</Form>
		</Section>
	);
};

export default Register;
