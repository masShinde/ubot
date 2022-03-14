import React from "react";
import BotMessage from "../BotMessage/BotMessage";
import UserMessage from "../UserMessage/UserMessage";
import "./ConversationBox.css";

const ConversationBox = ({ messages }) => {
  // console.log(messages);
  return (
    <div className="inner-wrapper">
      {messages.map((m, i, arr) => {
        return m.sender === "user" ? (
          <UserMessage
            isLast={i === arr.length - 1 || i === arr.length - 2}
            key={i}
            message={m}
          />
        ) : (
          <BotMessage isLast={i === arr.length - 1} key={i} message={m} />
        );
      })}
    </div>
  );
};

export default ConversationBox;
