import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { SERVER_SECRET } from './constant';
import { APP_ID } from './constant';

const VideoPage = () => {
    const {id} = useParams();

    const roomID = id;
    let myMeeting = async (element) => {
        //generate Kit Token
        const appID = APP_ID;
        const serverSecret =SERVER_SECRET;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Dipansh");


        // Create instance object from kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        //start the call
        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Copy Link',
                    url:
                      window.location.protocol + '//' +
                      window.location.host + window.location.pathname +
                      '?roomID=' +
                      roomID,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
        });
    }
  return (
    <div ref={myMeeting}> 
    
    </div>
  )
}

export default VideoPage
