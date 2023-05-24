import React from 'react'
import Navbar from './components/Navbar'
import Login from './pages/Login';
import { useEffect, useState } from 'react'
import  FirebaseApp  from './firebase.js';
import { getFirestore } from 'firebase/firestore';
import firebase from "firebase/app"
import "firebase/auth"
import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import Header from './components/Header/Header';
import Feed from './pages/Feed';
import { Route, Routes } from 'react-router-dom';
import RoomPage from './pages/RoomPage';
import Chatroom from './components/ChatRoom/Chatroom';
import Chat from './components/Chat';

//import './App.css'
//firebase.initializeApp(FirebaseApp)



export default function App() {

  const [user, setUser] = useState('qasir');
  console.log(getFirestore)
  console.log(getFirestore())
  // useEffect(() => {

  //    FirebaseApp.auth().onAuthStateChanged((user) => {
  //      if (user) {
  //        console.log(user);
  //        setUser(user);
  //     } else {
  //        setUser("");
  //      }
  //    });
  // }, [])
  
  
  return (
    <div className='theme-light'>
      
      {/* <Navbar /> */}
      <Login setUser = {setUser}/>
      {/* <h1>{user}</h1> */}
      <div>
        <Routes>
          <Route path = '/feed' element = {<Feed />} />
          <Route path = '/room/:roomId' element = {<RoomPage/>} />
        </Routes>
      </div>
    </div>
    

  )
}
