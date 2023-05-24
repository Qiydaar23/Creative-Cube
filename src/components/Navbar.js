import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-title'>
            <h1>Creative Cube</h1>
        </div>
        <ul className='navbar-menu'>
            <li><Link to= '/login'>Login</Link></li>.
            <li><Link to= '/profile'>profile</Link></li>
            <li><Link to= '/signup'>signup</Link></li>
            <li><Link to= '/feed'>feed</Link></li>
            <li><Link to= '/dashboard'>dashboard</Link></li>
            <li><Link to= '/'>home</Link></li>
            <li><Link to= '/'>logout</Link></li>
            <li><Link to = '/sidebar'>Sidebar</Link></li>
            <li><Link to = '/timeline'>Timeline</Link></li>
            <li><Link to = '/header'>Header</Link></li>
            <li><Link to = '/chatroom'>ChatRoom</Link></li>
            <li><Link to = '/roompage'>RoomPage</Link></li>
            <li><Link to = '/gallery'>gallery</Link></li>
            <li><Link to = '/chat'>chat</Link></li>
            <li><Link to = '/lesson'>Lesson</Link></li>
            <li><Link to = '/ashgallery'>AshGallery</Link></li>
            <li><Link to = '/ashleysidebar'>AshleySidebar</Link></li>
            
        </ul>

    </div>
  )
}
