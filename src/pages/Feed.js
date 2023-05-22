import React from 'react'
import Navbar from '../components/Navbar'
import  FirebaseApp  from '../firebase.js';
import {getStorage} from 'firebase/storage';// where pictures are stored
import firebaseContext from '../context/firebase';
//import {getDatabase, ref, set} from 'firebase/database';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore'; // where collections are stored
import { useEffect, useState } from 'react'
import './feed.css'
//import { useState } from 'react';
import {storage} from '../firebase.js'
import {ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'


export default function Feed() {
    useEffect( () => {

        let firestore = getFirestore(FirebaseApp)
    
        const uploadPost = async () => {
            
            let doc = await addDoc(collection(firestore, "post"), {
                 name: 'Ada Lovelace',
                 description: "testing picture upload",
                 pictureName: ""
        }) 
    } 
    const fetchposts = async () => {
        const querySnapshot = await getDocs(collection(firestore, "post"));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            
        } )
    }
    // console.log(getStorage(FirebaseApp, "gs://creative-cube-2b9da.appspot.com"))
    // let storage = getStorage(FirebaseApp, "gs://creative-cube-2b9da.appspot.com")  
    // console.log(storage)
    // let database = getDatabase(FirebaseApp)
    // console.log(database.app)
    // set(ref(database, 'users/1'), {
    //     name: 'Ada Lovelace',
    //     description: "testing picture upload",
    // });
    uploadPost().catch((error) => {
        console.log(error)
    });
    fetchposts().catch((error) => {
        console.log(error)
    });
}, [])
    const [comment, setComment] = useState("")
    const [commentList, setCommentList] = useState([])

    const handleCommentSubmit = (e) => {
        e.preventDefault()
        setCommentList((commentList) => [...commentList, comment])
        setComment("")
    }


    const handleComment = (e) => {
        setComment(e.target.value)
    }



    const [like, setlike] = useState(0)

    const [islike, setIslike] = useState(false)

    const handleLike =()=>{
        setlike(islike ? like-1: like+1)
        setIslike(!islike)
    }
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]); // list of images
    const imageListRef = ref(storage, 'images/');

    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then(() => {
            alert("Image uploaded");
        })    
    }

    useEffect(() => {
       listAll(imageListRef).then((res)=>{
        res.items.forEach((item)=>{
            getDownloadURL(item).then((url)=>{
                setImageList((prev) => [...prev, url]);
            })   
        }) 
       })
    },[])
  
    
        return (
        
          <div className="post">
            {commentList.map((comment) => {
                return <p>{comment}</p>;
            })
            }
            <div className="postWrapper">
              <div className="postTop">
                <div className="postTopLeft"></div>
                <img className="postProfileImg" src="" alt="" />
                <span className="postUsername"></span>
                <br />
                <span className="postDate"></span>
                <div className="postTopRight"></div>
              </div>
              <div className="postCenter">
                <span className="postText"></span>
                <img className="postImg" src="" alt="" />
              </div>
              <div className="postImageWrapper">
                <img className="postImage" src="" alt="" />
              </div>
              <div className="postBottom">
                <div className="postBottomLeft">
                  <button onClick={handleLike}>❤️</button>
                  <br />
                  <button onClick={handleCommentSubmit}>
                    💭 comment
                    <input value={comment} type="text" placeholder="....post a comment" onChange={handleComment} />
                  </button>
                  <div>
                    <input type='file'onChange={(event) => {setImageUpload(event.target.files[0])}}/>
                    <button onClick={uploadImage}>Upload Post</button>
                    {imageList.map((url) => {
                        return <img src={url} className='imageupload'/>
                    }
                    )}
                  </div>
                </div>
                <span className="postLikeCounter">{like} people like this</span>
                <div className="postBottomRight">
                  <span className="postCommentText"> comments</span>
                </div>
              </div>
            </div>
          </div>
        );
      
      
    }