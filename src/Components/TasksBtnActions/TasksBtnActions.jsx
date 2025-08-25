import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContextProvider'
import axios from 'axios'
import toast from 'react-hot-toast'
import { TaskContext } from '../../Context/TasksContextProvider'
import { useState } from 'react'
import EditTaskForm from '../EditTaskForm/EditTaskForm'
import { useMutation } from '@tanstack/react-query'
import { queryClient } from '../../App'

export default function TasksBtnActions({ id, Done, Title, Description }) {
	let { token } = useContext(AuthContext)
	// let { getAllTasks } = useContext(TaskContext)
	const [showModal, setShowModal] = useState(false);


	// deleteTaskk
	async function handleDeleteTask(id) {
		try {
			let { data } = await axios.delete(`https://todoapp.cleverapps.io/api/v1/task/delete-task/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			if (data.Data === "Task deleted successfully") {
				toast.success(data.Data)
				getAllTasks()
			}
		} catch (err) {
			toast.error(err.data.Data)
		}
	}



	// handle delete task
	const { mutate: deleteTask } = useMutation({
		mutationKey: ["finalizeTask"],
		mutationFn: async (id) => {
			return await axios.delete(`https://todoapp.cleverapps.io/api/v1/task/delete-task/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
		},
		onSuccess: (data) => {
			toast.success(data.data.Data)
			queryClient.invalidateQueries(["tasks"])
		},
		onError: (error) => {
			toast.error(error.data?.data?.error || "Something went wrong")
		}
	})




	// finalize task
	const { mutate: finalizeTask } = useMutation({
		mutationKey: ["finalizeTask"],
		mutationFn: async () => {
			return await axios.patch(
				`https://todoapp.cleverapps.io/api/v1/task/finalize-task/${id}`,
				{},
				{
					headers: {
						Authorization: `Bearer ${token}`
					}
				}
			)
		},
		onSuccess: (data) => {
			queryClient.invalidateQueries(["tasks"])
		},
		onError: (error) => {
			toast.error(error.data?.data?.error || "Something went wrong")
		}
	})


	// handeling updating task
	const { mutate: updateTask } = useMutation({
		mutationKey: ["updateTask"],
		mutationFn: async (value) => {
			return axios.put(`https://todoapp.cleverapps.io/api/v1/task/update-task/${id}`, value, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
		},
		onSuccess: (data) => {
			toast.success("Task updated!")
			setShowModal(false)
			queryClient.invalidateQueries(["tasks"])
		},
		onError: (err) => {
			toast.error(err.response?.data?.error || "Something went wrong")
		}
	})



	return (

		<>
			{/* ---------------- action buttons------------------------ */}
			<div className="flex  gap-2 ml-4">
				<button onClick={() => {
					setShowModal(true)
				}}
					className="px-3 py-2 text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200">
					Edit
				</button>
				<button onClick={() => {
					deleteTask(id)
				}} className="px-3 py-1 text-xs font-medium rounded text-red-700 bg-red-100 hover:bg-red-200">
					Delete
				</button>
				<button onClick={() => {
					finalizeTask(id)
				}} className="px-3 py-1 text-xs font-medium rounded text-green-700 bg-green-100 hover:bg-green-200">
					{Done ? "undo" : "Mark as complete"}
				</button>
			</div>




			{/* -----------------------Edit Task Modal----------------------------------------------------- */}

			{showModal && (
				<div className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-xsm flex items-center justify-center w-full h-full">
					<div className="bg-white dark:bg-gray-900 p-5 rounded-lg w-full max-w-lg mx-auto shadow-lg">
						<h2 className="text-lg font-semibold mb-4 dark:text-white">Edit Task</h2>
						<EditTaskForm setShowModal={setShowModal} mutate={updateTask} Title={Title} Description={Description} />
					</div>
				</div>)}
		</>
	)
}
