import "./App.css";
import RoutesMain from "./routes";
import GlobalStyle from "./styles/global";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./context/AuthContext";
import UserProvider from "./context/UserContext";
import ContactProvider from "./context/ContactContext";

function App(){
	return (
		<AuthProvider>
			<ToastContainer />
			<UserProvider>
				<ContactProvider>
					<GlobalStyle />
					<RoutesMain />
				</ContactProvider>
			</UserProvider>
		</AuthProvider>
	);
}

export default App;
