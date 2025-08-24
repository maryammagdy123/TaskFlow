import React from 'react'
import MainNavbar from '../Navbar/MainNavbar'
import { Outlet } from 'react-router'

export default function MainLayout() {
	return (
		<>
			<MainNavbar />
			<Outlet />
		</>
	)
}
