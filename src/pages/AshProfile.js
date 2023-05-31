import React from 'react'
import Navbar from '../components/Navbar'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './ashprofile.css'
import { useEffect, useRef } from 'react'
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';


export default function AshProfile() {

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
    <>
    <Header />
    
    <div className='ashprofile-page'>
      <div className='ashprofile-container'  >
        <img className='ashpic-icon' src='https://res.cloudinary.com/dgr7iw6kd/image/upload/v1685285430/ej4a0nkemj0vayc54yss.jpg' alt='creative cube logo' />
      </div>
      <div>
      <h1 className='ashprofile-info' >Profile</h1>
      <h2 className='ashprofile-info' >Name: Ashley</h2>
      <h2 className='ashprofile-info' >Email: Ashley@creative.com</h2>
      <h2 className='ashprofile-info' >Phone: 917-xxx-xxxx</h2>
      <h2 className='ashprofile-info' >Other media outlet: IG, Facebook ... ask artist</h2>
      <h2 className='ashprofile-info' >Bio: I am a creative artist who loves to create art
        and share it with the world. I am a creative artist who loves to create art
      <h3> Enetr Room Code below to set private chat or lesson with artist</h3>  
      
      </h2>
      </div>

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
    </>
  )
}





  

 
  
