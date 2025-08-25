import React from 'react'
import AuthForm from '../../Components/AuthForm/AuthForm';
import axios from 'axios';
import * as zod from "zod";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router';
import { useMutation } from '@tanstack/react-query';
export default function Register() {
	const schema = zod.object({
		name: zod.string()
			.nonempty("Name is required!")
			.min(3, "Name should be 3 characters at least")
			.max(20, "Name shouldnt exeed 10 characters")
			.regex(/^[\p{Script=Arabic}A-Za-z\s]+$/u, "Name must contain only letters and spaces"),
		email: zod.string()
			.nonempty("Email is required!")
			.regex(/^[\w.-]+@[a-zA-Z\d-]+\.[a-zA-Z]{2,}$/, "Enter a valid email address"),
		password: zod.string()
			.nonempty("Password cannot be empty")
			.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/, "Password must be at least 8 characters and include uppercase, lowercase, and a number")

	})
	let navg = useNavigate();
	let registerFormInputs = [
		{
			labelTitle: "Name",
			labelFor: "name",
			id: "name",
			type: "text",
			placeholder: "Enter your name",
			autoComplete: "name"
		},
		{
			labelTitle: "Email address",
			labelFor: "email",
			id: "email",
			type: "email",
			placeholder: "Enter Your Email address",
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



	const handleAuth = async (value) => {
		return await axios.post(
			"https://todoapp.cleverapps.io/api/v1/auth/register",
			{
				...value
			}
		);
	}


	const { mutate } = useMutation({
		mutationFn: handleAuth,
		onSuccess: (data) => {
			toast.success("Account created successfully!");
			navg("/login")
		},
		onError: (error) => {
			toast.error(error)
		}
	})


	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div className="text-center">
					<h2 className="mt-6 text-3xl font-extrabold text-gray-900">
						Create your account
					</h2>
					<p className="mt-2 text-sm text-gray-600">
						Join TaskFlow today
					</p>
				</div>

				<div className="bg-white py-8 px-6 shadow-lg rounded-lg sm:px-10">

					{/* register form */}
					<AuthForm inputs={registerFormInputs} schema={schema} mutate={mutate} />

					<div className="mt-6 text-center">
						<p className="text-sm text-gray-600">
							Already have an account?{' '}
							<Link to="/login">
								<button

									className="font-medium text-blue-600 hover:text-blue-500 transition duration-150 ease-in-out"
								>
									Login
								</button>
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);

}



