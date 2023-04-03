import Section from "./styles";
import { useUser } from "../../../context/UserContext";
import { IContact, useContacts } from "../../../context/ContactContext";

const ListContacts = () => {
	
	const { contacts, setContact } = useContacts();
	const { setModal } = useUser();
	const handleClick = (contact: IContact) => {
		setModal("edit");
		setContact(contact);
	};

	return (
		<Section>
			<h3>Contatos salvos</h3>
			<ul>
				{contacts?.map((contact: IContact) => (
					<li key={contact.id} onClick={() => handleClick(contact)}>
						<p>{contact.name}</p>
						<p>{contact.cellphone}</p>
						<button>Editar</button>
					</li>
				))}
			</ul>
		</Section>
	);
};

export default ListContacts;
