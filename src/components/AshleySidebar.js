import React from 'react'
//import './sidebar.css'
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ForumIcon from '@mui/icons-material/Forum'
import AppsIcon from '@mui/icons-material/Apps';
import { useState } from 'react';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { Link } from 'react-router-dom'


export default function AshleySidebar() {

  const [expended, setExpended] = useState(false)

  return (
    <div className={expended ? 'sidebar-container' : "sidebar-container sidebar-container-NX"}>
      <div className='sidebar-upper'>
        <div className='sidebar-heading'>
          <div className='sidebar-brand'></div>
            <img className='sidebar-heading-icon' src='https://res.cloudinary.com/dgr7iw6kd/image/upload/v1685285430/ej4a0nkemj0vayc54yss.jpg' alt='cube' />
            <h2>...............The Creative............</h2>
        </div>
        
        <button onClick={() => setExpended(!expended)} className={expended ? 'sidebar-button sidebar-button-in' : "sidebar-button sidebar-button-out"}><SwapHorizIcon /> </button>
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
        
          
        
          <span className='sidebar-button-text'><CastForEducationIcon /><Link className='link-text' to = '/ashlesson'>lesson</Link></span>

          <span className='sidebar-button-text'><AccountBoxIcon /><Link className='link-text' to = '/ashprofile'>profile</Link></span>
          <span className='sidebar-button-text'><ForumIcon /><Link className='link-text' to = '/chat'>chat</Link></span>
          
          <span className='sidebar-button-text'><AppsIcon /><li><Link to = '/ashgallery'>AshGallery</Link></li></span>
      </div>
    </div>
  )
}
