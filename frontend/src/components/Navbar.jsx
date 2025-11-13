import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navbar() {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('http://localhost:3000/auth/me', { withCredentials: true });
                setUsername(response.data.username);
            } catch (error) {
                setUsername("");
                console.error("Error fetching user data:", error);
            }
        };
        fetchUser();
    }, []);

    const handleLogout = async () => {
        try {
            await axios.get('http://localhost:3000/auth/logout', { withCredentials: true });
            setUsername(""); // clear username after logout
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
                    {username && <div className='welcomeUser'>Welcome, {username}!</div>}
                </div>

                <div className='navbar-right'>
                    <Link to='/' className='nav-link'>Home</Link>

                    {/* If logged in */}
                    {username ? (
                        <>
                            <button className='nav-link' onClick={handleLogout}>Logout</button>
                        </>
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
