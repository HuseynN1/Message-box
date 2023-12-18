import React, { useEffect, useState } from 'react'
import styles from '../chat/chat.module.css'
import { onValue,ref, set } from 'firebase/database'
import { db} from '../../utils/firebase'

const ChatInput = () => {
  const [userKey,setUserKey]=useState('')
  const [chat,setChat]=useState([])
  const [message,setMessage]=useState('')

  useEffect(()=>{
    const userKey=window.localStorage.getItem('userKey')
    setUserKey(userKey)
  },[])
  
  useEffect(()=>{
    onValue(ref(db,'/chat'),snapshot=>{
      setChat(snapshot.val()|| []);

    },[])
  },[])
 const  onclick=()=>{
    const msgItem={
      key:userKey,
      message
    }
    msgItem.message.trim() !== "" && chat.push(msgItem);
    set(ref(db,"/chat"),chat)
  }
  return (
    <div className={styles.inputWrapper}>
      <input className={styles.inp} type='text' onChange={e=>setMessage(e.target.value )}/>
      <button className={styles.btn} onClick={onclick}>Send</button>
        
    </div>
  )
}

export default ChatInput