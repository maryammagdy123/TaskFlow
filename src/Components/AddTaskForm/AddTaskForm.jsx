import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { Button, Textarea } from 'flowbite-react'

import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import * as zod from "zod";
import { AuthContext } from '../../Context/AuthContextProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { TaskContext } from '../../Context/TasksContextProvider';
export default function AddTaskForm() {
	let navg = useNavigate()
	let schema = zod.object({
		Title: zod.string()
			.nonempty("Task cannot be empty")
			.min(5)
			.max(20)
		, Description: zod.string()
			.nonempty("Description can not be empty")
			.min(5)
			.max(200)
	})
	let { register, handleSubmit,reset ,formState: { errors } } = useForm({
		resolver: zodResolver(schema),
		mode: "onBlur"
	})
	let { token } = useContext(AuthContext)

	let { getAllTasks } = useContext(TaskContext)
	// ADD NEW TASK
	async function handleAddTask(value) {
		try {
			let { data } = await axios.post(`https://todoapp.cleverapps.io/api/v1/task/add-task`, value, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			}

			)

			if (data?.message === "Ok") {
				toast.success("Task added Successfully")
				reset()
				navg("/tasks")
				getAllTasks()

			}
		} catch (err) {
			console.log(err);

		}
	}
	return (
		<div className="bg-white shadow-sm rounded-lg border border-gray-200">
			<div className="p-6">
				<h3 className="text-lg font-medium text-gray-900 mb-4">Add New Task</h3>

				{/* form */}
				<form className="flex flex-col gap-4" onSubmit={handleSubmit(handleAddTask)}>
					{/* Task field */}
					<div className="flex-1">
						<input
							type="text"
							id='Title'
							name='Title'
							{...register("Title")}
							placeholder="Enter task title..."
							className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
						{errors["Title"] && <p className="text-red-800 bg-red-500 p-3 text-sm mt-1"> {errors["Title"]?.message}</p>}
					</div>

					{/* task description field */}
					<div className="flex-1">
						<Textarea
							id="Description"
							name='Description'
							{...register("Description")}
							placeholder="Enter task description.." required rows={4}
						/>
						{errors["Description"] && <p className="text-red-800 bg-red-500 p-3 text-sm mt-1"> {errors["Description"]?.message}</p>}
					</div>


					{/* add task button */}
					<Button
						type="submit"
						className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
					>
						Add Task
					</Button>
				</form>
			</div>
		</div>
	)
}
