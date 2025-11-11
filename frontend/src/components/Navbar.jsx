import { Link } from 'react-router-dom'
import '../styles/navbar.css'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='navbar-left'>
                    <Link to='/' className='brand'>Really Cool Notes</Link>
                </div>
                <div className='navbar-right'>
                    <Link to='/' className='nav-link'>Home</Link>
                    <Link to='/registration' className='nav-link'>Register</Link>
                    <Link to='/login' className='nav-link'>Login</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar