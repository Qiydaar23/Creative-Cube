import React from 'react'

import { useEffect, useRef, } from 'react'
import './lesson.css'

export default function AshLesson() {

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
    <h1 className='title'>Lesson Level : Starters</h1>
    <h1 className='subtitle'>Lesson Title : Learn how to draw and color bugs</h1>
    <div>
    
    </div>

    </>
    <video className='insectVideo'
      ref = {videoRef}
      src = "https://res.cloudinary.com/dgr7iw6kd/video/upload/v1685303577/kxxzh3zq0ylmyow2i3lm.mp4"
      width = {960}
      height = {540}
      controls
    />  
    <video className='insectVideo'
      ref = {videoRef}
      src = "https://res.cloudinary.com/dgr7iw6kd/video/upload/v1685303988/xaklnclcpn2r8wnazumx.mp4"
      width = {960}
      height = {540}
      controls
   />
   <video className='insectVideo'
      ref = {videoRef}
      src = "https://res.cloudinary.com/dgr7iw6kd/video/upload/v1685304433/kxfaecc7jgwvb42ojyos.mp4"
      width = {960}
      height = {540}
      controls
   />
    </div>
      
  )
}
