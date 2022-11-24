import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div style={{ display: "flex", backgroundColor: "#5aad70", padding: "15px" }}>
        <div>
            <Link to="/browse" className='navbarlink'>Rent a property</Link>
            <Link to="/login" className='navbarlink' id='Login'>Login</Link>
            <Link to="/register" className='navbarlink'>Create user</Link>
            <Link to="/support" className='navbarlink'>Support</Link>
        </div>
        <div  style={{ paddingLeft: "20%"}}>
        <Link to="/">
          <img
            src="https://seeklogo.com/images/B/Bugatti_EB-logo-A62F579204-seeklogo.com.png"
            alt="logo"
            style={{ height: "30px" }}
          />
        </Link>

        </div>
        </div>
    );
}
export default Navbar;