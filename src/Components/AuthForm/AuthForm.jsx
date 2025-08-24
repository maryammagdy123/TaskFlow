
import React from 'react'
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router';
import { zodResolver } from "@hookform/resolvers/zod"
export default function AuthForm({ inputs, schema, handleAuth }) {
	let location = useLocation();
	let isLoginPage = location.pathname === "/login";
	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: zodResolver(schema),
		mode: "onBlur"
	});
	return (
		<>
			<form className="space-y-6" onSubmit={handleSubmit(handleAuth)} >

				{
					inputs.map((input, index) => {
						let { labelTitle, labelFor, id, type, placeholder, autoComplete } = input
						return <>
							<div key={index}>
								<label htmlFor={labelFor} className="block text-sm font-medium text-gray-700 mb-2">
									<span>{labelTitle}</span>
								</label>
								<input
									id={id}
									name={id}
									type={type}
									autoComplete={autoComplete}
									className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
									placeholder={placeholder}
									{...register(id)}
								/>
								{errors[id] && <p className="text-red-800 bg-red-500 p-3 text-sm mt-1">{errors[id]?.message}</p>}
							</div>
						</>
					})
				}


				<div>
					<button
						type="submit"
						className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
					>
						{isLoginPage ? "Log in" : "Sign Up"}
					</button>
				</div>
			</form>
		</>
	)
}
