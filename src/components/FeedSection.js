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



export default function FeedSection({image, target_image, target}) {

//https://mail.google.com/mail/u/0?ui=2&ik=5c79c2748c&attid=0.1&permmsgid=msg-a:r-7329919252278184271&th=18854f72a62a1db2&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_TaViINfeRo2xAzn2tvQqx-rmu5LwzDo6jxeg3RxU8XG-lSKTLQFNk4wCdVqxGDdSCL3es18Zzz6qwxK6jAL_pn8NsL8MwVTRQGKo7-_B8X--JLVX3Pv-fkgI&disp=emb&realattid=18854f7076ee4e019f71

    const [posts , setPosts] = useState([])

    const user =JSON.parse(localStorage.getItem("user"))
    console.log("user is " + user)  

    let firestore = getFirestore(FirebaseApp)
    
    const fetchposts = async () => {
        const querySnapshot = await getDocs(collection(firestore, "post"));

        let postsFromdb = []

        querySnapshot.forEach((doc) => {
            

            postsFromdb.push({id: doc.id, ...doc.data()})

        } )
        postsFromdb = await Promise.all(postsFromdb.map(async (post) => {
            console.log("fetching image from " + post.storagelocation)
            let url = "https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png"
                if (post.storagelocation) {
                    console.log("fetching image from ")
                 url = await getDownloadURL(ref(storage, post.storagelocation)) 
                }
            
            post.comments = post.comments ? post.comments : []
            return {...post, url}
        }))

        setPosts(postsFromdb)
        console.log(postsFromdb)
    }




    useEffect( () => {

        
        const uploadPost = async () => {
            
            let doc = await addDoc(collection(firestore, "post"), {
                 name: 'Ada Lovelace',
                 description: "testing picture upload",
                 pictureName: ""
        }) 
    } 



    
    
    // uploadPost().catch((error) => {
    //     console.log(error)
    // });
    fetchposts().catch((error) => {
        console.log(error)
    });
}, [])
    const [comment, setComment] = useState("")
    const [commentList, setCommentList] = useState([])

    const handleCommentSubmit = (post) => {
     

        console.log(post)
        console.log(comment)
        const docRef = doc(firestore, "post", post.id);
        updateDoc(docRef, {
            comments: arrayUnion(comment)

        }).then(() => {
            console.log("Document successfully updated!");
              let copy = [...posts]
         copy = copy.map((image)=>{
             if(image.id === post.id){
                 image.comments.push(comment)
             }
             return image

         })
         setPosts(copy)
        }).catch((error) => {
            console.error("Error updating document: ", error);
        });

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

    const handleDelete =  (post) => {

        console.log("post in delete", post)
        console.log("deleting" + post)
         deleteDoc(doc(firestore,"post", post.id)).then((data)=>{
            console.log("succesfully deleted", data)
        }).catch ((error) => {
            console.log("error deleting", error)
            let copy = [...post]
         copy = copy.filter((image) => image.id !== post.id)
         setPosts(copy)
        })
         
    }

    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((data) => {
            console.log(data);

            const imagelocation = "gs://" + data.ref.bucket + "/" + data.ref.fullPath;
            console.log(imagelocation);
            setDoc(doc(firestore, "post", v4() ), {
                storagelocation: imagelocation,
    
            }).then(() => {
                console.log("Document successfully created!");
                fetchposts().catch((error) => {
                    console.log(error)
                });
            
            }).catch((error) => {
                console.error("Error creating document: ", error);
            });



            // alert("Image uploaded");
        })    
    }

    useEffect(() => {
       listAll(imageListRef).then((res)=>{
        res.items.forEach((item)=>{
            getDownloadURL(item).then((post)=>{
                console.log("the post is ",post);
                setImageList((prev) => [...prev, {post, count:0, islike: false, comments: []}]);
            })   
        }) 
       })
    },[])
  
    
        return (
        <div className='container'>  
        <Header/>
        <div className='gridcontainer'>
            
                 <Sidebar user={user} image = {image}/>

            
          <div className="post">
          <input type='file'onChange={(event) => {setImageUpload(event.target.files[0])}}/>
                            
                            <button onClick={uploadImage}>Upload Post</button>
            
                  <div className='image-house'>  

                  {posts.map((post) => {
                    return(
                        <>
                            <img src={post.url} className='imageupload'/>
                            <div >
                            <button onClick={() => handleDelete(post) } className='delete'>Delete Post</button>
                            <button onClick={() =>handleCommentSubmit(post)}>   
                             
                    💬 comment </button>
                            </div>
                    <input value={comment} type="text" placeholder="....post a comment" onChange={handleComment} />
                    <div className='comment-container'>
                    {post.comments.map((comment) => {
                return <p>{comment}</p>;
            })}
                    </div>
                        </>
                    )
                  })
                  }
                 
                    
                   
                  </div>
                    <Rightbar image ={target_image} target = {target}/>
                </div>


        </div>
        
              </div>
       
   
        );
      
      
    }