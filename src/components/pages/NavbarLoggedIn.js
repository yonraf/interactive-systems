import React from 'react'
import { Link } from 'react-router-dom'


const NavbarLoggedIn = () => {
    return (
        <div style={{ display: "flex", backgroundColor: "#5aad70", padding: "15px" }}>
            <Link to="/browse-login" className='navbarlink'>Rent a property</Link>
            <Link to="/support" className='navbarlink'>Support</Link>
        </div>
    );
}
export default NavbarLoggedIn;