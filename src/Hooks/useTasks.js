import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'


export default function useTasks() {
	// handeling fetching data(user's tasks ) from api using useQuery
	let { token } = useContext(AuthContext)

	async function getAllTasks() {
		return await axios.get(`https://todoapp.cleverapps.io/api/v1/task/get-all`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}

return  useQuery({
		queryKey: ["tasks"],
		queryFn: getAllTasks,
		select: (data) => data?.data?.Data
	})



}
