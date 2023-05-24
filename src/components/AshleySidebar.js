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
            <img className='sidebar-heading-icon' src='https://mail.google.com/mail/u/0?ui=2&ik=5c79c2748c&attid=0.1&permmsgid=msg-a:r-3625961861562444952&th=18859223a2af3878&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ943M9awp16Me7PQIqqDkRO-9HTqqVxG2XiqqoM_59uO2GG6iwC3bwFC_Qz_6Iajxa0myM_ldCV5gQ-pAIjmtS2o_fu2aC8GTXTHqwaQxORIxvSFsLlJu96rvI&disp=emb&realattid=18859222dffe4e019f71' alt='cube' />
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
        
          
        
          <span className='sidebar-button-text'><CastForEducationIcon /><li><Link className='link-text' to = '/lesson'>Lesson</Link></li></span>

          <span className='sidebar-button-text'><AccountBoxIcon /><Link className='link-text' to= '/profile'>profile</Link></span>
          <span className='sidebar-button-text'><ForumIcon /><Link className='link-text' to = '/chat'>chat</Link></span>
          <span className='sidebar-button-text'><AppsIcon /><li><Link to = '/ashgallery'>AshGallery</Link></li></span>
      </div>
    </div>
  )
}
