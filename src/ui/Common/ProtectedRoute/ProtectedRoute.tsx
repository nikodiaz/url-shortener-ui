import { Navigate } from "react-router-dom"
import Cookies from "js-cookie"

const useAuth = () => {
  const user = Cookies.get("UserToken")
  return user ? true : false
}

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/signin" />
  }

  return children
}

export default ProtectedRoute
