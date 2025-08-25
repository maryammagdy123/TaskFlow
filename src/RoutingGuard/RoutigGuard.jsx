import { useContext } from "react";
import { Navigate } from "react-router"
import { AuthContext } from "../Context/AuthContextProvider";
import Skeleton from "../Components/Skeleton/Skeleton";




export function RoutingGuard({ children }) {
	const { token, loading } = useContext(AuthContext);

	if (loading) {
		return <Skeleton />;
	}

	if (!token) {
		return <Navigate to="/login" replace />;
	}


	return children;
}