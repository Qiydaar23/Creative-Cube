import React from 'react'
import Navbar from '../components/Navbar'
import  FirebaseApp  from '../firebase.js';
import {getStorage} from 'firebase/storage';// where pictures are stored
import firebaseContext from '../context/firebase';
//import {getDatabase, ref, set} from 'firebase/database';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore'; // where collections are stored
import { useEffect, useState } from 'react'

//import { useState } from 'react';
import {storage} from '../firebase.js'
import {ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Qrightbar from '../components/Qrightbar';
import AshleySidebar from './AshleySidebar';




export default function Ashfeed() {
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
    
    uploadPost().catch((error) => {
        console.log(error)
    });
    fetchposts().catch((error) => {
        console.log(error)
    });
}, [])
    const [comment, setComment] = useState("")
    const [commentList, setCommentList] = useState([])

    const handleCommentSubmit = (url) => {
        let copy = [...imageList]
        copy = copy.map((image)=>{
            if(image.url === url){
                image.comments.push(comment)
            }
            return image

        })
        setImageList(copy)
        setComment("")
    }


    const handleComment = (e) => {
        setComment(e.target.value)
    }

    const upLoadPost = () => {

        //const upLoadPost = () => {

            // addDoc(posts, {
            //     imageUrl: "",
            //     createdAt: serverTimestamp(),
            //     user: "Qasir",
            //     Likes: 0,
            //   })..........................................working on this file

        
    }

    const [like, setlike] = useState(0)

    const [islike, setIslike] = useState(false)

    const handleLike =(url)=>{
        let copy = [...imageList]
        copy = copy.map((image)=>{
            if(image.url === url){
                const like = image.islike ? -1 : 1
                image.count = image.count + like
                // image.count = image.count + 1
                image.islike = !image.islike
            }
            return image    
        })
        setImageList(copy)
        
        console.log(imageList)
    }
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]); // list of images
    const imageListRef = ref(storage, 'images/');

    const handleDelete = (url) => {
        let copy = [...imageList]
        copy = copy.filter((image) => image.url !== url)
        setImageList(copy)
    }

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
                console.log(url);
                setImageList((prev) => [...prev, {url, count:0, islike: false, comments: []}]);
            })   
        }) 
       })
    },[])
  
    
        return (
        <div className='container'>  
        <Header/>
        <div className='gridcontainer'>
             <div>   
                 <AshleySidebar />
             </div>
          <div className="post">
            {commentList.map((comment) => {
                return <p>{comment}</p>;
            })
            }
                  <div className='image-house'>  
                    {imageList.map((url) => {
                        return (
                        <div>
                            <input type='file'onChange={(event) => {setImageUpload(event.target.files[0])}}/>
                            <img src={url.url} className='imageupload'/>
                            <button onClick={uploadImage}>Upload Post</button>

                    <button onClick={() => handleDelete(url.url) } className='delete'>Delete Post</button>

                    <button onClick={() => handleLike(url.url) }>❤️
                    </button>
                    <span className="postLikeCounter">{url.count} people like this</span>{url.comments.map((comment) => {
                        return <p>{comment}</p>;
                    })
                    }
                
                    <button onClick={() =>handleCommentSubmit(url.url)}>
                    💬 comment </button>
                    <input value={comment} type="text" placeholder="....post a comment" onChange={handleComment} />

                    <div>
                        
                    </div>
                 
                        </div>
                        )
                    }
                    )}
                   
                  </div>
                    <Qrightbar/>
                </div>


        </div>
        
              </div>
       
   
        );
      
      
    }