import React, { useEffect, useState, useRef } from "react";
import ConversationBox from "../ConversationBox/ConversationBox";
import Typer from "../Typer/Typer";
import "./BotBox.css";

const BotBox = () => {
  const focusedDiv = useRef(null);
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [botMessage, setBotMessage] = useState("");

  useEffect(() => {
    const msgInterval = setTimeout(() => {
      if (botMessage) {
        let botMsg = {
          msg: botMessage,
          sender: "bot",
          timeStamp: new Date(),
        };
        setBotMessage("");
        setMessages([...messages, botMsg]);
      }
    }, 2000);

    return () => clearTimeout(msgInterval);
  }, [botMessage]);

  useEffect(() => {
    if (messages && messages.length > 0)
      localStorage.setItem("ubot", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (focusedDiv && focusedDiv.current)
      focusedDiv.current.scrollIntoView({ behavior: "smooth" });
  });

  useEffect(() => {
    let localMessages = JSON.parse(localStorage.getItem("ubot"));
    if (localMessages && localMessages.length > 0) setMessages(localMessages);
  }, []);

  const addNewMessage = () => {
    if (userInput.trim()) {
      let newMessage = {
        msg: userInput.trim(),
        timeStamp: new Date(),
        sender: "user",
      };
      setMessages([...messages, newMessage]);
      setUserInput("");
      setBotMessage(newMessage.msg);
    }
  };

  const onUserInputChange = (e) => {
    let ip = e.target.value;
    setUserInput(ip);
  };

  const keyDownHandler = (e) => {
    if (e.key === "Enter") {
      addNewMessage();
    }
  };

  return (
    <div className="bot-wrapper">
      <div className="conversation-wrapper">
        <ConversationBox messages={messages} />
        {botMessage ? <Typer /> : null}
        <div className="focusDiv" ref={focusedDiv}></div>
      </div>
      <div className="input-wrapper">
        <input
          placeholder="Start Typing..."
          value={userInput}
          type="text"
          onKeyDown={keyDownHandler}
          onChange={onUserInputChange}
          className="user-input"
        />
        <div onClick={addNewMessage} className="send-icon-wrapper">
          <i class="fas fa-paper-plane"></i>
        </div>
      </div>
    </div>
  );
};

export default BotBox;
