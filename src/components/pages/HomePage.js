import React from "react";
import { useEffect } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";

import logo from "../../assets/images/bg.png";
import "react-chat-widget/lib/styles.css";
import "../../App.css";
import "../../gabriscss.css";

export default function HomePage() {
  useEffect(() => {
    addResponseMessage("hello mai frend i hav hause");
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
  };

  return (
    <div>
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
          <div>jeff the landlord</div>
          <div
            className="grid"
            style={{ height: "100px", textAlign: "center" }}
          >
            <button className="properties">Property 1</button>
            <button className="properties">Property 2</button>
            <button className="properties">Property 3</button>
            <button className="properties">Property 4</button>
          </div>
        </div>
        <div className="box3">
          <form>
            <input type="button" text="name" />
          </form>
          <form>
            <input type="button" placeholder="number" />
          </form>
          <form>
            <input type="button" placeholder="aaa" />
          </form>
          <form>
            <input type="button" placeholder="jeff" />
          </form>
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
