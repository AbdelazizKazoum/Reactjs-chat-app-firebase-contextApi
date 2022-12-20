import React from "react";
import "./styles/chats.scss";

const Chats = () => {
  return (
    <div className="chats">
      <div className="user">
        <img src="https://images.pexels.com/photos/6389849/pexels-photo-6389849.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
        <div className="content">
          <span>Abdelaziz kazoum</span>
          <p>This is message content</p>
        </div>
      </div>
      <div className="user">
        <img src="https://images.pexels.com/photos/6389849/pexels-photo-6389849.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
        <div className="content">
          <span>Abdelaziz kazoum</span>
          <p>This is message content</p>
        </div>
      </div>
      <div className="user">
        <img src="https://images.pexels.com/photos/6389849/pexels-photo-6389849.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
        <div className="content">
          <span>Abdelaziz kazoum</span>
          <p>This is message content</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
