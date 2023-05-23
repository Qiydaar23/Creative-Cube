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
        <h1>Room page</h1>
        <div ref = {myMeeting}/>
    </div>
  )
}
