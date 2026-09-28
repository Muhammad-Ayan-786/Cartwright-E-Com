import { useContext } from "react"
import { Navigate, Outlet } from "react-router"
import { AuthStore } from "../context/authContext"
import AuthLoading from "../components/AuthLoading"

const PublicRoutes = () => {

  const { user, isLoading } = useContext(AuthStore)

  if (isLoading) return <AuthLoading />

  if (user) return <Navigate to="/products" replace />

  return <Outlet />
}

export default PublicRoutes