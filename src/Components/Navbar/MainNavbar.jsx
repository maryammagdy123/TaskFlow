import { Button, NavbarCollapse, NavbarLink, NavbarToggle, Navbar, NavbarBrand, DarkThemeToggle } from 'flowbite-react'
import React from 'react'
import { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router'
import { AuthContext } from '../../Context/AuthContextProvider'
import toast from 'react-hot-toast'

export default function MainNavbar() {


  let { token, setToken } = useContext(AuthContext)
  let navg = useNavigate()
  function handleLogout() {
    localStorage.removeItem("token")
    setToken(null)
    toast.success("Logged out ")
    navg("/login")
  }

  return (
    <>
      <Navbar fluid className="dark:bg-black bg-white border-gray-200 shadow-lg">
        {/* Logo */}
        <NavbarBrand as={Link} to="/">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">T</span>
          </div>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-gray-900 ms-3">
            TaskFlow
          </span>
        </NavbarBrand>



        {/* Right side (Welcome message + Logout) */}

        {(token && localStorage.getItem("token")) && <div className="flex md:order-2 items-center space-x-3">

          <Button
            onClick={handleLogout}
            color="light"
            className="!px-3 !py-1 text-gray-900 hover:text-blue-700"
          >
            Logout
          </Button>
          <DarkThemeToggle />
          <NavbarToggle />
        </div>}

        {/* Menu Links */}
        {token && <NavbarCollapse>
          <NavbarLink
            as={NavLink}
            to="/"
            active
            className="cursor-pointer dark:text-blue-600 font-medium"
          >

            Home

          </NavbarLink>
          <NavbarLink
            as={NavLink}
            to="/tasks"
            className="cursor-pointer dark:text-white  rounded px-3 py-2 transition-colors"
          >

            Tasks

          </NavbarLink>

        </NavbarCollapse>}
      </Navbar>
    </>
  )
}
