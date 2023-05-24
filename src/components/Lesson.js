import React from 'react'
import { useEffect, useRef, } from 'react'
import './lesson.css'

export default function Gallery() {

  const cloudinaryRef = useRef();
  const videoRef = useRef();
  


  useEffect(() => {
   if (window.cloudinary) return;
   cloudinaryRef.current =  window.cloudinary 
   cloudinaryRef.current.videoPlayer(videoRef.current, {
      cloudName: "dgr7iw6kd",
      
   })
  }, []);

  

  return (
   <div> 
    <>
    <h1 className='title'>Lesson Level : Expert</h1>
    <h1 className='subtitle'>Lesson Title : How to make an Elphant painting</h1>
    <div>
      <img className='phant' src = "https://res.cloudinary.com/dgr7iw6kd/image/upload/v1685205382/fxzt0r7cfydjiynhmzmm.jpg" alt='elephant' />
      <h2>Step one Sketch out the image of the elephant you want</h2>
      <img className='phant' src = "https://res-console.cloudinary.com/dgr7iw6kd/thumbnails/v1/image/upload/v1685205383/ZWp0Mzl3NTVrZDd4cGVsdGttcmc=/preview" alt='elephant' />
      <h2>introduce basic highlight to the image </h2>
      <img className='phant' src = "https://res-console.cloudinary.com/dgr7iw6kd/thumbnails/v1/image/upload/v1685205381/cHN4bHV2b2diYmxmbnBxeWxhZGI=/preview" alt='elephant' />
      <h2>introduce contrast to the image</h2>
      <img className='phant' src = "https://res-console.cloudinary.com/dgr7iw6kd/thumbnails/v1/image/upload/v1685205382/eXJmaWFkbG1zNHcxbGpoM2N3dDk=/preview" alt='elephant' />
      <h2>introduce more contrast and highlight to the image</h2>
      <img className='phant' src = "https://res-console.cloudinary.com/dgr7iw6kd/thumbnails/v1/image/upload/v1685205383/dXZjdXJyaGRlbDQzcTZ5aWY3ZXE=/preview" alt='elephant' />
      <h2>introduce detail and different shades of color </h2>
      <img className='phant' src = "https://res-console.cloudinary.com/dgr7iw6kd/thumbnails/v1/image/upload/v1685205383/eGkweHhieDF6YnJ4bmprN2ptOXQ=/preview" alt='elephant' />
      <h2>And finishing touches and Gloss painting </h2>
    </div>

    </>
    <video className='phantVideo'
      ref = {videoRef}
      src = "https://res.cloudinary.com/dgr7iw6kd/video/upload/v1684967769/sbvocipdaz8aqpuokshs.mp4"
      width = {960}
      height = {540}
      controls
    />  
   
    </div>
      
  )
}
