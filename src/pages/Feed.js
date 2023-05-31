import React from 'react'
import Navbar from '../components/Navbar'
import  FirebaseApp  from '../firebase.js';
import {getStorage} from 'firebase/storage';// where pictures are stored
import firebaseContext from '../context/firebase';
//import {getDatabase, ref, set} from 'firebase/database';
import { getFirestore, collection, addDoc, getDocs, updateDoc , arrayUnion, doc, setDoc, deleteDoc } from 'firebase/firestore'; // where collections are stored
import { useEffect, useState } from 'react'
import './feed.css'
//import { useState } from 'react';
import {storage} from '../firebase.js'
import {ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Rightbar from '../components/Rightbar';
import FeedSection from '../components/FeedSection';



export default function Feed({image}) {


    
        return (
            <FeedSection image = {"https://mail.google.com/mail/u/0?ui=2&ik=5c79c2748c&attid=0.1&permmsgid=msg-a:r-7329919252278184271&th=18854f72a62a1db2&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_TaViINfeRo2xAzn2tvQqx-rmu5LwzDo6jxeg3RxU8XG-lSKTLQFNk4wCdVqxGDdSCL3es18Zzz6qwxK6jAL_pn8NsL8MwVTRQGKo7-_B8X--JLVX3Pv-fkgI&disp=emb&realattid=18854f7076ee4e019f71"} 
            target = {"Ashley"} target_image={"https://res.cloudinary.com/dgr7iw6kd/image/upload/v1685285430/ej4a0nkemj0vayc54yss.jpg"}/>
   
        );
      
      
    }
