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
    <div>
      
      {/* <Navbar /> */}
      <Login setUser = {setUser}/>
    </div>
  )
}
