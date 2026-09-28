import { api } from "../config/api"


/**
 * @description register user
 * @param {Object} credentials 
 * @returns user data
 * @throws error
 */
export const registerUserApi = async (credentials) => {
  try {

    const res = await api.post("/auth/register", credentials)
    return res.data

  } catch (error) {

    throw error.response?.data ?? {
      message: "Unable to register. Please try again."
    }

  }
}


/**
 * @description login user
 * @param {Object} credentials 
 * @returns user data
 * @throws error
 */
export const loginUserApi = async (credentials) => {
  try {

    const res = await api.post("/auth/login", credentials)
    return res.data

  } catch (error) {

    throw error.response?.data ?? {
      message: "Unable to login. Please try again."
    }

  }
}



/**
 * @description refresh access token with the help of refresh token
 * @param {string} refreshToken 
 * @returns user data and access token
 * @throws error
 */
export const refreshAccessTokenApi = async () => {
  try {

    const res = await api.post("/auth/refresh")
    return res.data

  } catch (error) {

    throw error.response?.data ?? {
      message: "Unable to refresh token. Please try again."
    }

  }
}



/**
 * @description logout user
 * @param {string} refreshToken
 * @throws error
 */
export const logoutUserApi = async () => {
  try {

    const res = await api.post("/auth/logout")
    return res.data

  } catch (error) {

    throw error.response?.data ?? {
      message: "Unable to logout. Please try again."
    }

  }
}