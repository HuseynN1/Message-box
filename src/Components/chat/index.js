import React from "react";
import ChatBox from "./ChatBox";
import ChatInput from "./ChatInput";
import styles from "./chat.module.css";

const Chat = () => {
  return (
    <div className={styles.Chat}>
      <h1>Chat app</h1>
      <ChatBox />
      <ChatInput />
    </div>
  );
};

export default Chat;
