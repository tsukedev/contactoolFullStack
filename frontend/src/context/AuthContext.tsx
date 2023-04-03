import React from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { createContext, ReactNode, useContext, useState } from "react";

export interface IUser {
	id: string;
	name: string;
	email: string;
	password: string;
	cellphone: string;
	contacts: [];
}

export interface IUserLogin {
	email: string;
	password: string;
}

export interface IUserRegister {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
	cellphone: string;
}

export interface IAuthProviderProps {
	children: ReactNode;
}

interface IAuthContext {
	user: IUser;
	setUser: React.Dispatch<React.SetStateAction<IUser>>;
	registerUser: (data: IUserRegister) => void;
	submitLogin: (data: IUserLogin) => void;
	logout: () => void;
}

export const AuthContext = createContext({} as IAuthContext);
const AuthProvider = ({ children }: IAuthProviderProps) => {

	const [user, setUser] = useState<IUser>({} as IUser);
	const navigate = useNavigate();
	const registerUser = (data: IUserRegister) => {
		api.post("/users", data).then((res) => {
				toast.success("Cadastro realizado", {
					pauseOnHover: false,
					autoClose: 2000,
				});
				navigate(`/login`);
			})
	};

	const submitLogin = (data: IUserLogin) => {
		api.post("/login", data)
			.then((res) => {
				window.localStorage.setItem("@fullstack:token", res.data.token);
				toast.success("Login feito com sucesso!", {
					autoClose: 2000,
					pauseOnHover: false,
				});
				navigate("/dashboard", { replace: true });
			})
			.catch((error) => {
				toast.error("Email ou senha inválidos", {
					pauseOnHover: false,
					autoClose: 2000,
				});
				console.log(error);
			});
	};

	const logout = (): void => {
		localStorage.clear();
		navigate("/login");
		toast.success("Logout efetuado com sucesso!", {
			pauseOnHover: false,
			autoClose: 2000,
		});
	};

	return (
		<AuthContext.Provider value={{ user, setUser, registerUser, submitLogin, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};

export default AuthProvider;
