import { useState } from 'react'
import { useForm } from 'react-hook-form'

function Registration() {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className='registrationContainer'>
        <form className='registrationCard' onSubmit={onSubmit}>
        

        </form>
    </div>
  )
}

export default Registration
