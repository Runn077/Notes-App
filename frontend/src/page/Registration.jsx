import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  username: z.string()
    .nonempty("Username must be not empty")
    .max(15, "Username must be less than 15 characters"),
  password: z.string()
    .nonempty("Password must be not empty")
    .min(5, "Must be at least 5 characters"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"], 
});

function Registration() {
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className='registrationContainer'>
        <form className='registrationCard' onSubmit={handleSubmit(onSubmit)}>
          <input className='usernameInput' 
          placeholder='Enter Username'
          {...register("username")}
          />
          <p className='errorMessage'>{errors.username?.message}</p>
          <input className='passwordInput' 
          type='password' 
          placeholder='Enter Password'
          {...register("password")}
          />
          <p className='errorMessage'>{errors.password?.message}</p>
          <input className='confirmPasswordInput' 
          type='password' 
          placeholder='Confirm Password'
          {...register("confirmPassword")}
          />
          <p className='errorMessage'>{errors.confirmPassword?.message}</p>
          <button className='saveBtn' 
          type='submit'>
            Submit
          </button>
        </form>
    </div>
  )
}

export default Registration
