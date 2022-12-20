import React from "react";
import attach from "../imgs/attach.png";
import img from "../imgs/img.png";

const Input = () => {
  return (
    <div className="input">
      <textarea placeholder="Message" className="message" type="text" />
      <div className="send">
        <img src={attach} alt="" />
        <img src={img} alt="" />
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
