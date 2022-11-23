import React from "react";
import NavbarLoggedIn from './NavbarLoggedIn'
import { Link } from 'react-router-dom'

import "react-chat-widget/lib/styles.css";
import "../../App.css";
import "../../gabriscss.css";

export default function HomePage() {
  return (
    <div>
      <NavbarLoggedIn></NavbarLoggedIn>
      <div className="split">
        <div className="box2">
          <div className="accountpic">image</div>
          <form>
            <input type="text" placeholder="name" name="search"/>
            <input type="text" placeholder="number" name="search" style={{ marginTop: "2vh"}}/>
            <input type="text" placeholder="email" name="search" style={{ marginTop: "2vh"}} />
            <input type="text" placeholder="proffesion" name="search" style={{ marginTop: "2vh"}}/>
          </form>
          {/*           <div>
            <EditText showEditButton />
            <EditTextarea />
          </div> */}
        </div>
        <div className="box1">
          <div>Starred properties</div>
          <div className="grid" style={{ height: "100px", textAlign: "center" }}>
            <Link to="/listing">
              <button className="properties">Property 1</button>
            </Link>
            <Link to="/listing">
              <button className="properties">Property 2</button>
            </Link>
            <Link to="/listing">
              <button className="properties">Property 3</button>
            </Link>
            <Link to="/listing">
              <button className="properties">Property 4</button>
            </Link>
          </div>
        </div>
        <div className="box3">
          <form>
            <input type="button" text="name" />
            <input type="button" placeholder="number" />
            <input type="button" placeholder="email" />
            <input type="button" placeholder="proffesion" />
          </form>
        </div>
      </div>
      
    </div>
  );
}
