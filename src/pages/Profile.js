import React from 'react'
import Navbar from '../components/Navbar'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './profile.css'
import { useEffect, useRef } from 'react'
import Header from '../components/Header/Header';


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
    <>
    <Header />
    <div className='profile-page'>
      <div className='holder'>
      <div className='profile-container'  >
        <img className='pic-icon' src='https://mail.google.com/mail/u/0?ui=2&ik=5c79c2748c&attid=0.1&permmsgid=msg-a:r-7329919252278184271&th=18854f72a62a1db2&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_TaViINfeRo2xAzn2tvQqx-rmu5LwzDo6jxeg3RxU8XG-lSKTLQFNk4wCdVqxGDdSCL3es18Zzz6qwxK6jAL_pn8NsL8MwVTRQGKo7-_B8X--JLVX3Pv-fkgI&disp=emb&realattid=18854f7076ee4e019f71' alt='creative cube logo' />
      </div>
      <div>
      <h1 className='profile-info' >Profile</h1>
      <h2 className='profile-info' >Name: Qasir</h2>
      <h2 className='profile-info' >Email: Qasir@creative.com</h2>
      <h2 className='profile-info' >Phone: 917-xxx-xxxx</h2>
      <h2 className='profile-info' >Other media outlet: IG, Facebook ... ask artist</h2>
      <h2 className='profile-info' >Bio: I am a creative artist who loves to create art
        and share it with the world. I am a creative artist who loves to create art
      <h3> Enetr Room Code below to set private chat or lesson with artist</h3>  
      
      </h2>
      </div>
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





  

 
  
