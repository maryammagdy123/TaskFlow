import React from 'react'
import { useForm } from 'react-hook-form'
import { TaskContext } from '../../Context/TasksContextProvider'


export default function EditTaskForm({ setShowModal, handleEditTask, Title, Description }) {

	let { register, handleSubmit} = useForm({
		defaultValues: {
			Title: Title,
			Description: Description
		}
	})

	return (
		<form className="space-y-4" onSubmit={handleSubmit(handleEditTask)}>
			<div className="flex-1">
				<input
					type="text"
					id='Title'
					name='Title'
					{...register("Title")}
					placeholder="Edit task title..."
					className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />

			</div>

			{/* task description field */}
			<div className="flex-1">
				<input
					type="text"
					id='Description'
					name='Description'
					{...register("Description")}
					placeholder="Edit task description..."
					className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />


			</div>



			<div className="flex justify-end gap-2">
				<button
					type="button"
					onClick={() => setShowModal(false)}
					className="px-4 py-2 rounded-lg bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
				>
					Cancel
				</button>
				<button

					type="submit"
					className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition"
				>
					Save changes
				</button>
			</div>
		</form>
	)
}
