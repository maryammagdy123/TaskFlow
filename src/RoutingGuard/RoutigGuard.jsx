import { useContext} from "react";
import { Navigate } from "react-router"
import { AuthContext } from "../Context/AuthContextProvider";



export function RoutingGuard({ children }) {
	let { token } = useContext(AuthContext);

	// error ocuresssssssssssss
	// if a user
	// useEffect(() => {
	// 	if (!token && localStorage.getItem("token")) {
	// 		return <Navigate to="/login" />;
	// 	}
	// },[token]);

	// if not a user
	if (!localStorage.getItem("token") && token) {
		return <Navigate to="/login" />;
	}

	return children;
}