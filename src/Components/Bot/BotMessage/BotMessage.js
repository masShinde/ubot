import React from "react";
import "./BotMessage.css";

const BotMessage = ({ message }) => {
  return (
    <div className="message-wrapper">
      <div className="bot-image">
        <i class="fas fa-robot"></i>
      </div>
      <div className="bot-message-wrapper">{message.msg}</div>
    </div>
  );
};

export default BotMessage;
