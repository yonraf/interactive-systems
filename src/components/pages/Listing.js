import React from "react";
import { useEffect } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";

import logo from "../../assets/images/bg.png";
import "react-chat-widget/lib/styles.css";
import "../../App.css";
import "../../gabriscss.css";
import Navbar from "./Navbar";

export default function Listing() {
  useEffect(() => {
    addResponseMessage("hello mai frend i hav hause");
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
  };

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>

      <div className="split">
        <div className="box1">
          <div className="placehold">image</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div className="box2">
          <div className="profilepic">pfp</div>
          <div>jeff the landlord</div>
          <div className="profiledesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>

      <div className="App">
        <Widget
          handleNewUserMessage={handleNewUserMessage}
          profileAvatar={logo}
          title="Chat with the landlord"
          subtitle="send him a message"
        />
      </div>
    </div>
  );
}
