import React from 'react'
import { useEffect, useRef } from 'react'

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
    <video 
      ref = {videoRef}
      src = "https://res.cloudinary.com/dgr7iw6kd/video/upload/v1684967769/sbvocipdaz8aqpuokshs.mp4"
      width = {960}
      height = {540}
      controls
    />  
    <button>❤️</button>
    <button>💬</button>
    </div>
      
  )
}
