import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


export const AuthContext = createContext()


export default function AuthContextProvider({ children }) {

	let [token, setToken] = useState(null)
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const storedToken = localStorage.getItem("token");
		if (storedToken) {
			setToken(storedToken);
		}
		setLoading(false);
	}, []);


	return <AuthContext.Provider value={{ token, setToken, loading }}>{children}</AuthContext.Provider>

}
