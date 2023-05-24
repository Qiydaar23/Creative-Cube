import React from 'react'
import Navbar from '../components/Navbar'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'


export default function Profile() {

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
    </div>
  )
}
