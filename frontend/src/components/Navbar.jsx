import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Navbar({ username, setUsername }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:3000/auth/logout', { withCredentials: true });
      setUsername(""); 
      navigate('/login');
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-left'>
          <Link to='/' className='brand'>Really Cool Notes</Link>
        </div>
        {username && <div className='welcomeUser'>Welcome, {username}!</div>}
        <div className='navbar-right'>
          <Link to='/' className='nav-link'>Home</Link>
          {username ? (
            <button className='nav-link' onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <Link to='/registration' className='nav-link'>Register</Link>
              <Link to='/login' className='nav-link'>Login</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
