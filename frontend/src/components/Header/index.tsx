import { Header } from "./styles";
import { useAuth } from "../../context/AuthContext";
import { useUser } from "../../context/UserContext";

const Header1 = () => {
	const { logout, user } = useAuth();
	const { setModal } = useUser();

	return (
		<Header>
			<h1>CONTACTOOL</h1>
			<div>
				<button onClick={() => setModal("user")}>Editar Perfil</button>
				<button onClick={() => logout()}>Sair</button>
			</div>
		</Header>
	);
};

export default Header1;
