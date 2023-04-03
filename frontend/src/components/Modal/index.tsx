import Section from "./styles";
import ModifyUser from "./ModifyUser";
import ModifyContact from "./ModifyContact";
import { useUser } from "../../context/UserContext";

const Modal = () => {
	const { modal } = useUser();

	return (
		<Section>
			<div className="modal">
				{modal === "user" ? <ModifyUser /> : <ModifyContact />}
			</div>
		</Section>
	);
};

export default Modal;
