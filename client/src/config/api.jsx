import axios from "axios"

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true
})

let currentAccessToken = null

export const setAccessToken = (token) => {
  currentAccessToken = token
}


api.interceptors.request.use(
  (config) => {
    if (currentAccessToken) {
      config.headers.Authorization = `Bearer ${currentAccessToken}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)