import React from 'react'
import Messages from './Messages'
import cam from '../imgs/cam.png'
import add from "../imgs/add.png";
import more from "../imgs/more.png";
import './styles/chat.scss';
import Input from './Input';

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span className="name">Abdelaziz</span>
        <div className="chatIcons">
          <img src={cam} alt="" />
          <img src={add} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default Chat
