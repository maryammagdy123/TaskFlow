import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { AuthContext } from './AuthContextProvider'
import { useEffect } from 'react'

export const TaskContext = createContext()
export default function TasksContextProvider({ children }) {
	let { token } = useContext(AuthContext)
	let [tasks, setTasks] = useState([])

	async function getAllTasks() {
		try {
			let { data } = await axios.get(`https://todoapp.cleverapps.io/api/v1/task/get-all`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			if (data?.message === "Ok") {
				setTasks(data?.Data)
			console.log(tasks)
			}

		} catch (err) {
			console.log(err);

		}
	}
	useEffect(() => {
		if (token) {
			getAllTasks()
		}

	}, [token])

	return (
		<TaskContext.Provider value={{ getAllTasks, tasks, setTasks }}>{children}</TaskContext.Provider>
	)
}
