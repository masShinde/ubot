import React from "react";
import "./UserMessage.css";

const UserMessage = ({ message }) => {
  return (
    <div className="message-wrapper">
      <div className="user-message-wrapper">{message.msg}</div>
      <div className="user-image">
        <i class="fas fa-user"></i>
      </div>
    </div>
  );
};

export default UserMessage;
