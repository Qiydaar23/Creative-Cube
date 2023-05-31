import React from 'react'
import './rightbar.css'
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ForumIcon from '@mui/icons-material/Forum'
import AppsIcon from '@mui/icons-material/Apps';
import { useState } from 'react';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { Link } from 'react-router-dom'
import { doc, setDoc } from "firebase/firestore";
import FirebaseApp from '../firebase';

import { v4 } from 'uuid';
import { getFirestore } from "firebase/firestore";


export default function Rightbar({image, target}) {

  let firestore = getFirestore(FirebaseApp);
  

  const [expended, setExpended] = useState(false)

  const follow = () => {

    const user = JSON.parse(localStorage.getItem('user'))
    setDoc(doc(firestore, "followers", v4() ), {
      source: user.email,
      target: {target},
      timestamp: new Date(),


  }).then(() => {
      console.log("Document successfully created!");
      
  
  }).catch((error) => {
      console.error("Error creating document: ", error);
  });
  }


  return (
    <div className={expended ? 'ashrightbar-container' : "ashsidebar-container ashsidebar-container-NX"}>
      <div className='ashrightbar-upper'>
        <div className='ashrightbar-heading'>
          <div className='ashrightbar-brand'></div>
          <h2>.......Creatives..to..follow........</h2>
            <img className='ashrightbar-heading-icon' src={image} alt='cube' />
            <h3>@ashleyR</h3>
            <button onClick={follow}>follow</button>
            <span className='sidebar-button-text'><CastForEducationIcon /><Link className='link-text' to = '/ashlesson'>lesson</Link></span>

          <span className='sidebar-button-text'><AccountBoxIcon /><Link className='link-text' to = '/ashprofile'>profile</Link></span>
          <span className='sidebar-button-text'><ForumIcon /><Link className='link-text' to = '/Ashchat'>chat</Link></span>
          <span className='sidebar-button-text'><AppsIcon /><Link to = '/ashgallery'>Gallery</Link></span>
          <span className='star'>▶️<Link to = '/Ashfeed'> switch user</Link> </span>
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
