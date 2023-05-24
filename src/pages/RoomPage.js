import React from 'react'
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt"
import { useParams } from 'react-router-dom'



export default function RoomPage() {

    const {roomId} = useParams()

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
    <div className='room-Page'>
        <h1>Hello Creatives </h1>
        <span>please while on video be respectful to peers
            this is a safe space for all creatives
        </span>
        <p>
            please be mindful of your background!
        </p>
        
        <div ref = {myMeeting}/>
            
    </div>
  )
}
