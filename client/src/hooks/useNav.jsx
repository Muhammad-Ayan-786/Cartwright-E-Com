import { useContext, useState } from "react"
import { AuthStore } from "../context/authContext"
import { logoutUserApi } from "../apis/authApi"
import { useNavigate } from "react-router";

export const useNav = () => {

  const navigate = useNavigate();

  const { user, setUser, setAccessToken } = useContext(AuthStore)
  const [isLoading, setIsLoading] = useState(false)

  const firstName = user?.name?.trim().split(/\s+/)[0] || 'Merchant'


  const signOutFunc = async () => {
    try {
      setIsLoading(true)

      await logoutUserApi()

      setUser(null)
      setAccessToken(null)

      navigate('/')

    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    role: user?.role,
    firstName,
    signOutFunc,
    isLoading
  }
}