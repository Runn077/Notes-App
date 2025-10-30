import React from 'react'

function Registration() {
  return (
    <div className='registeration container'>
        <div className='registrationTitle'>Username</div>
        <input className='username' placeholder='Enter Username'></input>
        <div className='passwordTitle'>Password</div>
        <input className='password' placeholder='Enter Password'></input>
        <button className='saveBtn'>Save</button>
    </div>
  )
}

export default Registration
