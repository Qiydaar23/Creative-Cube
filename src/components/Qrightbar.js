import React from 'react'
import './qrightbar.css'
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



export default function Qrightbar() {

  let firestore = getFirestore(FirebaseApp)

  const follow = () => {

    const user = JSON.parse(localStorage.getItem('user'))
    setDoc(doc(firestore, "followers", v4() ), {
      source: user.email,
      target: "Ashley",
      timestamp: new Date(),


  }).then(() => {
      console.log("Document successfully created!");
      
  
  }).catch((error) => {
      console.error("Error creating document: ", error);
  });
  }


  const [expended, setExpended] = useState(false)

  return (
    <div className={expended ? 'qrightbar-container' : "qsidebar-container qsidebar-container-NX"}>
      <div className='qrightbar-upper'>
        <div className='qrightbar-heading'>
          <div className='qrightbar-brand'></div>
          <h2>.......Creatives..to..follow........</h2>
            <img className='qrightbar-heading-icon' src='https://mail.google.com/mail/u/0?ui=2&ik=5c79c2748c&attid=0.1&permmsgid=msg-a:r-7329919252278184271&th=18854f72a62a1db2&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_TaViINfeRo2xAzn2tvQqx-rmu5LwzDo6jxeg3RxU8XG-lSKTLQFNk4wCdVqxGDdSCL3es18Zzz6qwxK6jAL_pn8NsL8MwVTRQGKo7-_B8X--JLVX3Pv-fkgI&disp=emb&realattid=18854f7076ee4e019f71' alt='cube' />
            <h3>@Qasir</h3>
            <button onClick={follow}>follow</button>
            </div>
        
        <button onClick={() => setExpended(!expended)} className={expended ? 'qrightbar-button qrightbar-button-in' : "qrightbar-button qrightbar-button-out"}><SwapHorizIcon /> </button>
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
