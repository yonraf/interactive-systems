import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

import '../../App.css'
import BackgroundImage from '../../assets/images/bg.png'

export default function LandingPage() {
    return (
        <header style={HeaderStyle}>
            <Navbar></Navbar>
            <h1 className="main-title text-center" id='frontPageTitle'>Welcome to Expressbolig</h1>
            <div style={{ textAlign: "center" }}>
                <form action="/browse" method="get">
                    <input
                        type="text"
                        id="header-search"
                        placeholder="Where you wanna live?"
                        name="search"
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
            <div className="grid" style={{ height: "100px", textAlign: "center" }}>
                <Link to="/listing">
                    <button className="properties">City 1</button>
                </Link>
                <Link to="/listing">
                    <button className="properties">City 2</button>
                </Link>
                <Link to="/listing">
                    <button className="properties">City 3</button>
                </Link>
                <Link to="/listing">
                    <button className="properties">City 4</button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}