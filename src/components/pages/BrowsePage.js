import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'


export default function BrowsePage() {
    return (
        <header>
            <Navbar></Navbar>
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
            <div style={{ textAlign: "center", width: "100%" }}>
                <input type="checkbox" value="one" style={{textAlign: "center", width: "5vh"}}/> 1 room
                <input type="checkbox" value="two" style={{textAlign: "center", width: "5vh"}}/> 2 rooms
                <input type="checkbox" value="three" style={{textAlign: "center", width: "5vh"}}/> 3 rooms
                <input type="checkbox" value="four" style={{textAlign: "center", width: "5vh"}}/> 4 rooms
                <input type="checkbox" value="fiveplus" style={{textAlign: "center", width: "5vh"}}/> 5+ roooms

            </div>
            <div style={{ width: "100%", display: "flex"}}>
                <div style={{ textAlign: "left", width: "20%", paddingTop: "10vh", paddingLeft: "2vh"}}>
                <p style={{ fontSize: "20px", paddingLeft: "10vh" }}>House type</p>
                    <div style = {{ width: "18vh"}}>
                    <input type="checkbox" value="villa" style={{textAlign: "center", width: "7vh"}}/>Villa
                    <input type="checkbox" value="house" style={{textAlign: "center", width: "7vh"}}/>House
                    <input type="checkbox" value="apartment" style={{textAlign: "center", width: "7vh"}}/>Apartment
                    <input type="checkbox" value="studio" style={{textAlign: "center", width: "7vh"}}/>Studio
                    <input type="checkbox" value="rooms" style={{textAlign: "center", width: "7vh"}}/>Rooms
                    <p style={{ fontSize: "20px", paddingLeft: "10vh", paddingTop: "5vh" }}>Facilities</p>
                    <input type="checkbox" value="pool" style={{textAlign: "center", width: "7vh"}}/>Pool
                    <input type="checkbox" value="garage" style={{textAlign: "center", width: "7vh"}}/>Garage
                    <input type="checkbox" value="garden" style={{textAlign: "center", width: "7vh"}}/>Garden
                    <input type="checkbox" value="balcony" style={{textAlign: "center", width: "7vh"}}/>Balcony
                    <input type="checkbox" value="furnished" style={{textAlign: "center", width: "7vh"}} />Furnished
                    </div>
                </div>
                <div className="grid" style={{ textAlign: "left", width: "80%" }}>
                    <Link to="/listing">
                        <button className="properties 3room house pool ">Property 1</button>
                    </Link>
                    <Link to="/listing">
                        <button className="properties 2room apartment balcony">Property 2</button>
                    </Link>
                    <Link to="/listing">
                        <button className="properties 5room villa pool balcony garage">Property 3</button>
                    </Link>
                    <Link to="/listing">
                        <button className="properties 1room studio">Property 4</button>
                    </Link>
                </div></div>
        </header>
    )
}
