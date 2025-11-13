import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const schema = z.object({
  username: z.string()
    .nonempty("Username must be not empty")
    .max(20, "Username must be less than 20 characters"),
  password: z.string()
    .nonempty("Password must be not empty")
    .min(5, "Password Must be at least 5 characters"),
})
function Login() {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: zodResolver(schema),
  })
  const [serverError, setServerError] = useState("")

  const onSubmit = async (data) => {
    const userData = {
      username: data.username,
      password: data.password
    }
    try {
      const response = await axios.post('http://localhost:3000/auth/login', userData, { withCredentials: true });
      if (response.data.user) {
        navigate('/')
      }
    } catch (error) {
      setServerError(error.response?.data?.error || "An unexpected error occurred.")
    }
  
  }

  return (
    <div className='registrationContainer'>
        <form className='registrationCard' onSubmit={handleSubmit(onSubmit)}>
          <div className='registrationTitle'>Login</div>  
          <p> Username </p>
          <input className='usernameInput' 
          placeholder='Enter Username'
          {...register("username")}
          />
          <p className='errorMessage'>{errors.username?.message}</p>
          <p> Password </p>
          <input className='passwordInput' 
          type='password' 
          placeholder='Enter Password'
          {...register("password")}
          />
          <p className='errorMessage'>{errors.password?.message}</p>
          <p className='errorMessage'>{serverError}</p>
          <button className='saveBtn' 
          type='submit'>
            Submit
          </button>
        </form>
    </div>
  )
}

export default Login
