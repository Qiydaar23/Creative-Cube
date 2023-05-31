import React from 'react'
import { Link } from 'react-router-dom' //" to link to other pages in the app friends"
import './header.css'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VideoChatOutlinedIcon from '@mui/icons-material/VideoChatOutlined';
import FeedIcon from '@mui/icons-material/Feed';
// import { useState } from 'react';

export default function Header() {

  // const [search, setSearch] = useState('')
  

  return (
    <header className='header-cover'>
        <div className='header-title-container'>Creative Cube
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>


        </div>
            <div className='header-subtitle-container'>A place to share your creativity</div>
            
                <button className='header-button'><Link to='/login'>LOG OUT</Link></button>    
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg> */}
                {/* <DarkModeOutlinedIcon className='header-button'/> */}
        <Link to='/profile'><button className='header-button'>PROFILE</button></Link>
        {/* <div className='search'>
        <SearchOutlinedIcon/>
        <input className='header-button' placeholder='Search'/>
        </div> */}
        <DarkModeOutlinedIcon className='header-button'/>
        <Link to ='/roompage'>
        <VideoChatOutlinedIcon className='header-button'/>
        </Link>
      
        <Link to='/Feed'>
        <FeedIcon className='header-button'/>
          </Link>


    </header>
  )
}
