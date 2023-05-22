// import React from 'react'
// import firebaseContext from "../../context/firebase";

// import Navbar from './components/Navbar'
// import Login from './pages/Login';
// import { useEffect, useState } from 'react'
// import  FirebaseApp  from './firebase.js';
// import { getFirestore } from 'firebase/firestore';
// import firebase from "firebase/app"
// import "firebase/auth"
// import {useAuthState} from 'react-firebase-hooks/auth'
// import {useCollectionData} from 'react-firebase-hooks/firestore'

// firebase.initializeApp(FirebaseApp)

// function ChatMessage(props) {
//     const {text, uid} = props.message;

//     const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
//     return (
//     <div className={`message ${messageClass}`}>  
//         <img src = {photoURL} />    
//         <p>{text}</p>
//     </div>
//     )
// }
    

// function ChatRoom() {
//     const messagesRef = firestore.collection('messages');
//     const query = messagesRef.orderBy('createdAt').limit(25);

//     const [messages] = useCollectionData(query, {idField: 'id'});
//     const [formValue, setFormValue] = useState('');
//     const sendMessage = async(e) => {
//         e.preventDefault();
//         const {uid, photoURL} = auth.currentUser;
//         await messagesRef.add({
//             text: formValue,
//             createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//             uid,
//             photoURL
            

//         })
//     }
// }



// export default function chatroom() {
//   return (
//     <>
//         <div>
//              {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
//         </div>
//         <form onSubmit={sendMessage}>
//             <input value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
//             <button type="submit">Send</button>
//         </form>
//     </>
//   )
// }
