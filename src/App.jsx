

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import MainLayout from './Components/MainLayout/MainLayout'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Pages/Home/Home'
import Tasks from './Pages/Tasks/Tasks'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import { Toaster } from 'react-hot-toast'
import { RoutingGuard } from './RoutingGuard/RoutigGuard'
import AuthContextProvider from './Context/AuthContextProvider'


export const queryClient = new QueryClient()
function App() {

  let Routes = createBrowserRouter([
    // default
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <RoutingGuard> <Home /></RoutingGuard>
        },
        {
          path: "/tasks",
          element: <RoutingGuard>  <Tasks /></RoutingGuard>
        },
        {
          path: "/login",
          element: <Login />

        },
        {
          path: "/register",
          element: <Register />

        }

      ]
    }
  ])
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>

          <RouterProvider router={Routes} />
          <Toaster />

        </AuthContextProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
