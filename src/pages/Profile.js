import React from 'react'
import Navbar from '../components/Navbar'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import { useEffect, useRef } from 'react'


export default function Profile() {

  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: "dgr7iw6kd",
      uploadPreset: "hmrlqk8h",
    }, function(error, result) {
      console.log(result);
    })
  }, []);


  const [roomCode, setRoomCode] = useState("")  
  const navigate = useNavigate()

  const handleRoomCodeChange = (e) => {
    e.preventDefault();
    navigate(`/room/${roomCode}`)
    setRoomCode(e.target.value)



  }
  return (
    <div className='profile-page'>

      <form onSubmit={handleRoomCodeChange} className='profile-form'>
        <div>
          <label htmlFor='name'>Enter Room code</label>
          <input value={roomCode} onChange={e => setRoomCode(e.target.value)} type='text' id='name' placeholder='Enter Room Code' />
        </div>
        <button type='submit'>Enter Room</button>  
      </form>
      <>
      <h1> upload images to Cloud</h1>
      <button onClick={() => widgetRef.current.open()}>Upload</button>
      </>
    </div>
  )
}





  

 
  
