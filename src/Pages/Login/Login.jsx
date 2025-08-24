/**
 * Login Component - Handles user authentication and login functionality
 * 
 * This component provides:
 * 1. User authentication interface with email and password fields
 * 2. Form validation using Zod schema validation
 * 3. API integration for login requests
 * 4. Authentication state management via AuthContext
 * 5. Navigation and user feedback mechanisms
 * 
 * Services Provided:
 * - User authentication service via external API endpoint
 * - Form validation service with custom validation rules
 * - Token management service (storage and context updates)
 * - User navigation service (redirect after successful login)
 * - Toast notification service for user feedback
 * - Session persistence via localStorage
 */


import AuthForm from '../../Components/AuthForm/AuthForm';
import * as zod from "zod";
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContextProvider';


export default function Login() {
	let { setToken } = useContext(AuthContext)
	let navg = useNavigate()
	const schema = zod.object({
		email: zod.string()
			.nonempty("Email is required!")
			.regex(/^[\w.-]+@[a-zA-Z\d-]+\.[a-zA-Z]{2,}$/, "Enter a valid email address"),
		password: zod.string()
			.nonempty("Password cannot be empty")
			.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/, "Password must be at least 8 characters and include uppercase, lowercase, and a number")
	})

	let LogInFormInputs = [
		{
			labelTitle: "Email address",
			labelFor: "email",
			id: "email",
			type: "email",
			placeholder: "Enter Your Email",
			autoComplete: "email"
		},
		{
			labelTitle: "Password",
			labelFor: "password",
			id: "password",
			type: "password",
			placeholder: "Enter Your password",
			autoComplete: "new-password"
		}
	]

	// 
	const handleAuth = async (value) => {

		try {
			const { data } = await axios.post(
				"https://todoapp.cleverapps.io/api/v1/auth/login",
				value
			);
			if (data?.message === "Ok") {
				console.log(data)
				toast.success("Logged in successfully!");
				localStorage.setItem("token", data?.token)
				setToken(data?.token)
				navg("/")

			}
		} catch (error) {

			toast.error("Email or password is incorrect");

		}



	}


	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div className="text-center">
					<h2 className="mt-6 text-3xl font-extrabold text-gray-900">
						Log in to your account
					</h2>
					<p className="mt-2 text-sm text-gray-600">
						Welcome back to TaskFlow
					</p>
				</div>

				<div className="bg-white py-8 px-6 shadow-lg rounded-lg sm:px-10">
					{/* log in form */}
					<AuthForm inputs={LogInFormInputs} schema={schema} handleAuth={handleAuth} />

					<div className="mt-6 text-center">
						<p className="text-sm text-gray-600">
							Don't have an account?{' '}
							<Link to="/register">
								<button

									className="font-medium text-blue-600 hover:text-blue-500 transition duration-150 ease-in-out"
								>
									Signup
								</button>
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

