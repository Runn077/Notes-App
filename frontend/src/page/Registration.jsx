import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Registration() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")

  const usernameChange = (e) => {
    setUsername(e.target.value)
  }
  const passwordChange = (e) => {
    setPassword(e.target.value)
  }

  const userSave = () =>{
    axios.post(`http://localhost:3001/users/`, {username: username, password: password})
      .then((response) => {
        navigate(`/`)
      })
  }

  return (
    <div className='registeration container'>
        <div className='usernameContainer'>
            <p className='usernameTitle'>Username</p>
            <input 
              className='username' 
              placeholder='Enter Username'
              value = {username}
              onChange={usernameChange}
            />

        </div>
        <div className='passwordContainer'>
            <p className='passwordTitle'>Password</p>
            <input 
              className='password' 
              placeholder='Enter Password'
              value={password}
              onChange={passwordChange}
            />
        </div>
        <button 
          className='saveBtn'
          onClick={userSave}
        >
          Save
        </button>
    </div>
  )
}

export default Registration
