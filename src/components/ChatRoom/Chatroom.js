import React, {useState, useRef} from 'react'
// import { useState, useRef } from 'react'
import Auth from '../Auth'
import Cookies from 'universal-cookie'
import Chat from '../Chat'
import {signOut} from 'firebase/auth'
import {auth} from '../../firebase'

const cookies = new Cookies();




export default function Chatroom() {

  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))

  const [room, setRoom] = useState('public')

  const roomInputRef = useRef(null)

  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null)
  }

  if (!isAuth) {

  return (
    <div>chatroom
      <Auth setIsAuth ={setIsAuth} />
    </div>
  )
}
  return (
    <>
      {room ? ( <div> <Chat room ={room}/> </div> ): ( <div className='room'> <label>Enter Room Name:</label>
      <input ref={roomInputRef} />
      <button onClick={() => setRoom(roomInputRef.current.value)}>Enter Room</button>
      </div>
      )}
      <div>
        <button onClick={signUserOut}>Logout</button>
      </div>
    </>
      )
}