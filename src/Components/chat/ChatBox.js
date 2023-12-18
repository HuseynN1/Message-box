import React, { useEffect, useState } from "react";
import styles from "./chat.module.css";
import { ref, onValue, push } from "firebase/database";

import { db } from "../../utils/firebase";

const ChatBox = () => {
  const [userKey, setUserKey] = useState("");
  const [chat, setChat] = useState([]);
  useEffect(() => {onValue(ref(db, "/chat"), snapshot => setChat(snapshot.val() || []));}, []);
  
    useEffect(() => {
      const x = window.localStorage.getItem("userKey");
      if (x) {
        setUserKey(x.key)
      } else {
        const snapshot = push(ref(db, "/chat"));
        window.localStorage.setItem("userKey", snapshot.key);
        setUserKey(snapshot.key);
      }

      setUserKey(x);
    }, []);
  return (
    <div className={styles.ChatBox}>
      {chat.map((element, index) => (
        <div
          key={index}
          className={
            element.key === userKey ? styles.msgForUser : styles.msgForMe
          }
        >
          {element.message}
        </div>
      ))}
    </div>
  );
};

export default ChatBox;
