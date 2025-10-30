import React from 'react'

function Registration() {
  return (
    <div className='registeration container'>
        <div className='usernameContainer'>
            <p className='usernameTitle'>Username</p>
            <input className='username' placeholder='Enter Username'></input>
        </div>
        <div className='passwordContainer'>
            <p className='passwordTitle'>Password</p>
            <input className='password' placeholder='Enter Password'></input>
        </div>
        <button className='saveBtn'>Save</button>
    </div>
  )
}

export default Registration
