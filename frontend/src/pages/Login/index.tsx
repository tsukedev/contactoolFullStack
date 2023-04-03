import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Form, Section } from "./styles";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUserLogin, useAuth } from "../../context/AuthContext";

const Login = () => {
	
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IUserLogin>({resolver: yupResolver(loginSchema),});
	const { submitLogin } = useAuth();
	const onError = () => toast.error("Campo obrigatório!", { autoClose: 2000 });
	const onSubmit = handleSubmit(submitLogin, onError);

	return (
		<Section>
			<Form onSubmit={onSubmit}>
				<h3>Login</h3>
				<label htmlFor="email">
					<input type="email" id="email" placeholder="E-mail" {...register("email")}/>
				</label>
				<label htmlFor="password">
					<input type="password" id="password" placeholder="Senha" {...register("password")}/>
				</label>
				<div>
					<button type="submit" className="btnLogin">Entrar</button>
					<button><Link to={"/"}> Cadastrar</Link></button>					
				</div>
			</Form>
		</Section>
	);
};

export default Login;
