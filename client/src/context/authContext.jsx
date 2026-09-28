import { createContext, useEffect, useState } from "react";
import { refreshAccessTokenApi } from "../apis/authApi";
import { setAccessToken as setAccessTokenApi } from "../config/api";
import { jwtDecode } from 'jwt-decode'

export const AuthStore = createContext()

export const AuthStoreContextProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [accessToken, setAccessToken] = useState(null)

  const [isLoading, setIsLoading] = useState(true)


  const setAccessTokenFunction = (token) => {
    setAccessToken(token)
    setAccessTokenApi(token)
  }


  useEffect(() => {
    const rehydrateSession = async () => {
      try {

        const res = await refreshAccessTokenApi()

        setUser(res.data.user);
        setAccessTokenFunction(res.data.accessToken);

        const decoded = jwtDecode(res.data.accessToken)

        setUser(prev => ({ ...prev, role: decoded.role }))

      } catch (error) {
        console.log(error);
        setUser(null);
        setAccessTokenFunction(null);
      } finally {
        setIsLoading(false);
      }
    }

    rehydrateSession()
  }, [])



  const value = {
    user,
    setUser,
    accessToken,
    setAccessToken: setAccessTokenFunction,
    isLoading
  }

  return <AuthStore.Provider value={value}>
    {children}
  </AuthStore.Provider>
}