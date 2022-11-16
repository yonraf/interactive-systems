import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div style={{ display: "flex", backgroundColor: "white", padding: "15px" }}>
            <Link to="/" className='navbarlink'>Rent a property</Link>
            <Link to="/login" className='navbarlink'>Login</Link>
            <Link to="/register" className='navbarlink'>Create user</Link>
            <Link to="/" className='navbarlink'>Support</Link>
        </div>
    );
}
export default Navbar;