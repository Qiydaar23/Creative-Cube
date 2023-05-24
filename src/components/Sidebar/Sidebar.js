import React from 'react'
import './sidebar.css'
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ForumIcon from '@mui/icons-material/Forum'
import AppsIcon from '@mui/icons-material/Apps';
import { useState } from 'react';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { Link } from 'react-router-dom'


export default function Sidebar() {

  const [expended, setExpended] = useState(false)

  return (
    <div className={expended ? 'sidebar-container' : "sidebar-container sidebar-container-NX"}>
      <div className='sidebar-upper'>
        <div className='sidebar-heading'>
          <div className='sidebar-brand'></div>
            <img className='sidebar-heading-icon' src='https://www.science.org/do/10.1126/science.adg2133/abs/_20221208_on_papuans.jpg' alt='cube' />
            <h2>The Creative</h2>
        </div>
        <button onClick={() => setExpended(!expended)} className={expended ? 'sidebar-button sidebar-button-in' : "sidebar-button sidebar-button-out"}><SwapHorizIcon /> </button>
          
          <span className='sidebar-button-text'><CastForEducationIcon /><li><Link className='link-text' to = '/lesson'>Lesson</Link></li></span>
          
          <span className='sidebar-button-text'><AccountBoxIcon /><Link className='link-text' to= '/profile'>profile</Link></span>
          <span className='sidebar-button-text'><ForumIcon /><Link className='link-text' to = '/chat'>chat</Link></span>
          <span className='sidebar-button-text'><AppsIcon /><Link className='link-text' to = '/gallery'>Gallery</Link></span>
      </div>
    </div>
  )
}
