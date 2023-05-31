import React from 'react'
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt"
import { useParams } from 'react-router-dom'
import Header from '../components/Header/Header'



export default function RoomPage() {

    let {roomId} = useParams()

    if (!roomId) {
        roomId = "public"
    }   

    const myMeeting = async (element) => {


        

        const appID = 955745303
        const serverSecret ="91e8a7697deafbd33aeafdcdc57bb73a";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            "Qasir"
            )
        // const kitToken = zegoUIKitPrebuilt.generateTokenForTest(appID, serverSecret, roomId, Date.now().toString(),"Qasir")
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container:element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            }
        })
    }

  return (
    <>
    <Header/>
    <div className='room-Page'>
        <h1>Hello Creatives welcome to room {roomId}</h1>

        
        <div ref = {myMeeting}/>
        <span>please wait for the video to load</span>

        <div>
        <img src="https://images.ctfassets.net/pdf29us7flmy/1ru4LpUGoG1KPeSJAkV1ZX/7900732794d4ded2db1e18738884695b/illustration-video-call-meeting-interview.png?w=720&q=100&fm=jpg" alt=""/>

<ul>RULES
    <li>
    please be mindful of your background!
</li>
<li> please while on video be respectful to peers
    this is a safe space for all creatives</li>
    <li>
        other wise have fun and enjoy the meeting
    </li>
    

    
</ul>

        </div>


            
    </div>
    </>
    
  )
}
