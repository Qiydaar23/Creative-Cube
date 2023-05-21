import React from 'react'
import Navbar from './components/Navbar'
import Login from './pages/Login';
import { useEffect, useState } from 'react'
import  FirebaseApp  from './firebase.js';


export default function App() {

  const [user, setUser] = useState('');
  useEffect(() => {

    FirebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        setUser(user);
      } else {
        setUser("");
      }
    });
  }, [])
  

  return (
    <div>
      
      {/* <Navbar /> */}
      <Login setUser = {setUser}/>
    </div>
  )
}
