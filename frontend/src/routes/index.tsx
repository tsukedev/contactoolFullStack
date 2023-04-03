import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import { Navigate, Route, Routes } from "react-router-dom";

function RoutesMain() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="*" element={<Navigate to={"/login"} />} />
			</Routes>
		</>
	);
}

export default RoutesMain;
