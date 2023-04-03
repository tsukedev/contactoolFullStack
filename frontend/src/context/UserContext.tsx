import api from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { IAuthProviderProps, useAuth } from "./AuthContext";
import { useContext, createContext, useEffect, Dispatch, SetStateAction, useState } from "react";

interface IUserContext {
	updateUser: (data: IModifyUser) => void;
	deleteUser: () => void;
	modal: string | null;
	setModal: Dispatch<SetStateAction<string | null>>;
}

export interface IModifyUser {
	name?: string;
	email?: string;
	cellphone?: string;
}

export const UserContext = createContext({} as IUserContext);

const UserProvider = ({ children }: IAuthProviderProps) => {
	const [modal, setModal] = useState<string | null>(null);
	const { user, setUser } = useAuth();
	const token = localStorage.getItem("@fullstack:token");
	const navigate = useNavigate();

	async function loadUser(token: string) {
		try {
			const response = await api.get(`/users/own`, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			});
			setUser(response.data);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		if (token) {
			loadUser(token);
		} 
		else {
			navigate("/login");
		}
	}, [token]);

	const updateUser = (data: IModifyUser) => {
		api.patch("/users/own", data, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => {
				setModal(null);
				loadUser(token!);

				toast.success("Perfil atualizado", {
					pauseOnHover: false,
					autoClose: 2000,
				});
			})
			.catch((error) => {
				toast.error("Erro ao tentar editar.", {
					pauseOnHover: false,
					autoClose: 2000,
				});
				console.log(error);
			});
	};

	const deleteUser = () => {
		api.delete("/users/own", {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => {
				setModal(null);
				toast.success("Conta apagada", {
					pauseOnHover: false,
					autoClose: 2000,
				});
				localStorage.clear();
				navigate("/login", { replace: true });
			})
			.catch((error) => {
				toast.error("Ocorreu um erro", {
					pauseOnHover: false,
					autoClose: 2000,
				});
			});
	};

	return (
		<UserContext.Provider value={{ updateUser, deleteUser, modal, setModal }}>
			{children}
		</UserContext.Provider>
	);
};

export function useUser() {
	const context = useContext(UserContext);

	return context;
}

export default UserProvider;
