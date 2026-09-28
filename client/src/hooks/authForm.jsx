import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { loginUserApi, registerUserApi } from "../apis/authApi";
import { AuthStore } from "../context/authContext";

export const useAuthForm = () => {

  const navigate = useNavigate();
  const { setUser, setAccessToken } = useContext(AuthStore)

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const { register, reset, handleSubmit, formState: { errors } } = useForm({
    mode: 'onChange'
  })


  const onRegisterSubmit = async (data) => {
    try {
      setIsSubmitting(true);

      const apiResponse = await registerUserApi(data)

      setUser(apiResponse.data.user)
      setAccessToken(apiResponse.data.accessToken)

      reset()

      navigate('/')

    } catch (error) {
      console.log(error)

    } finally {
      setIsSubmitting(false)
    }
  }

  const onLoginSubmit = async (data) => {

    try {
      setIsSubmitting(true);

      const apiResponse = await loginUserApi(data)

      setUser(apiResponse.data.user)
      setAccessToken(apiResponse.data.accessToken)

      navigate('/products')

      reset()

    } catch (error) {
      console.log(error)
    } finally {
      setIsSubmitting(false)
    }
  }


  return {
    navigate,
    register,
    handleSubmit,
    errors,
    onRegisterSubmit,
    onLoginSubmit,
    showPassword,
    setShowPassword,
    isSubmitting
  }
}