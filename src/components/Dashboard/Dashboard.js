import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Timeline from '../Timeline'
import Header from '../Header/Header'

export default function Dashboard() {
  return (
    <>
    <div>
        <Header />
    </div>
        <div>    
             <Timeline />
             <Sidebar />
    </div>
    </>
  )
}


//make a login page
// make a signup page
// make a profile page
// make a navbar

// make 3 users
// user auth
// make 3 different profile pages for each users
// --each user profile have a photo gallery
// make a feed page
// be able to upload images / videos using firebase
// make a chat room using firebase