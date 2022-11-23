import React from "react";
import { useEffect } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import NavbarLoggedIn from './NavbarLoggedIn'
import { Link } from 'react-router-dom'


import logo from "../../assets/images/bg.png";
import "react-chat-widget/lib/styles.css";
import "../../App.css";
import "../../gabriscss.css";

export default function HomePage() {
  useEffect(() => {
    addResponseMessage("hello, could i possibly come look at you beatiful house tomorrow?");
  }, []);

  return (
    <div>
      <NavbarLoggedIn></NavbarLoggedIn>
      <div className="split">
        <div className="box2">
          <div className="accountpic">image</div>
          <form>
            <input type="text" placeholder="name" name="search" />
          </form>
          <form>
            <input type="text" placeholder="number" name="search" />
          </form>
          <form>
            <input type="text" placeholder="aaa" name="search" />
          </form>
          <form>
            <input type="text" placeholder="jeff" name="search" />
          </form>
          {/*           <div>
            <EditText showEditButton />
            <EditTextarea />
          </div> */}
        </div>
        <div className="box1">
          <div>My properties</div>
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
            <input type="button" placeholder="aaa" />
            <input type="button" placeholder="jeff" />
          </form>
        </div>
      </div>
      <div className="App">
        <Widget
          profileAvatar={logo}
          title="Chat with the landlord"
          subtitle="send him a message"
        />
      </div>
    </div>
  );
}
