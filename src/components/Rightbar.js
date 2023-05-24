import React from 'react'
import './rightbar.css'
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ForumIcon from '@mui/icons-material/Forum'
import AppsIcon from '@mui/icons-material/Apps';
import { useState } from 'react';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { Link } from 'react-router-dom'


export default function Rightbar() {

  const [expended, setExpended] = useState(false)

  return (
    <div className={expended ? 'ashrightbar-container' : "ashsidebar-container ashsidebar-container-NX"}>
      <div className='ashrightbar-upper'>
        <div className='ashrightbar-heading'>
          <div className='ashrightbar-brand'></div>
          <h2>.......Creatives..to..follow........</h2>
            <img className='ashrightbar-heading-icon' src='https://res.cloudinary.com/dgr7iw6kd/image/upload/v1685285430/ej4a0nkemj0vayc54yss.jpg' alt='cube' />
            <h3>@ashleyR</h3>
            <button>follow</button>
            </div>
        
        <button onClick={() => setExpended(!expended)} className={expended ? 'ashrightbar-button ashrightbar-button-in' : "ashrightbar-button ashrightbar-button-out"}><SwapHorizIcon /> </button>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        
          
        
        
      </div>
    </div>
  )
}
