import React from 'react';
import { useEffect, useState } from 'react';
import { addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy, getDocs } from 'firebase/firestore';
import { auth, db } from '../firebase';
import './chat.css';
import Header from './Header/Header';
import Chat from './Chat';

export default function Ashchat(props) {
  const { room } = props;

  const [newMessage, setNewMessage] = useState('');
  const messagesRef = collection(db, 'messages');
  const [messages, setMessages] = useState([]);

  let currentRoom = room;
  if (!currentRoom) {
      currentRoom = 'public';
  }

  useEffect(() => {
    

     const queryMessages = query(messagesRef, where('room', '==', currentRoom), orderBy('createdAt'));
     
    console.log(queryMessages);
    getDocs(queryMessages).then((snapshot) => {
        console.log("snapshotIs", snapshot)
        snapshot.forEach((doc) => {
            console.log(doc.data());
        });
    });
     onSnapshot(queryMessages, (snapshot) => {
        console.log("snapshotIs", snapshot)
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      console.log(messages);
      setMessages(messages);
    })
    

  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage === '') return;

     addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: "Ashley",
      room: currentRoom,
    }).then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
    });
    
    setNewMessage('');
  };

  return (
    <>
    <div>
        <Header />
    </div>    
    
    <div onSubmit={handleSubmit} className='chat-app'>
        <div className='header'>
            <h1> Welcome to:{currentRoom}</h1>
        </div>
        <div className='messages'>
            {messages.map((message) => (
                <div key={message.id} className='message'>
                    <div className='user'><b>{message.user}</b></div>
                    <div className='text'>{message.text}</div>
                </div>
            ))}
        </div>
      <form className='message-form'>
        <input
          className='message-input'
          placeholder='Type a message...'
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <button className='send-button' type='submit'>
          Send
        </button>
      </form>
    </div>
    <div>
        <Chat />
    </div>
    </>
    
  );
}
