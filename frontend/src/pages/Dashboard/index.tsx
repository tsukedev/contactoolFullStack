import { Main, Form, Div } from "./styles";
import Modal from "../../components/Modal";
import Header1 from "../../components/Header";
import { useUser } from "../../context/UserContext";
import ListContacts from "../../components/MainList/ListContacts";
import AddContactDiv from "../../components/MainList/CreateContact";

const Dashboard = () => {
	const { modal } = useUser();

	return (
		<Main>
			{modal && <Modal />}
			<Header1 />
			<Div>
				<AddContactDiv />
				<ListContacts />				
			</Div>
		</Main>
	);
};

export default Dashboard;
