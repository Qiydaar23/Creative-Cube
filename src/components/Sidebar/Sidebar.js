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
            <img className='sidebar-heading-icon' src='https://mail.google.com/mail/u/0?ui=2&ik=5c79c2748c&attid=0.1&permmsgid=msg-a:r-7329919252278184271&th=18854f72a62a1db2&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_TaViINfeRo2xAzn2tvQqx-rmu5LwzDo6jxeg3RxU8XG-lSKTLQFNk4wCdVqxGDdSCL3es18Zzz6qwxK6jAL_pn8NsL8MwVTRQGKo7-_B8X--JLVX3Pv-fkgI&disp=emb&realattid=18854f7076ee4e019f71' alt='cube' />
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
