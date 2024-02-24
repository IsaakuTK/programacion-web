import './AllVideos.css'; 
import React from 'react';

import { StreamInfo } from "../../data/streamsinfo"
import { PortadaVideo } from  "../PortadaVideo/PortadaVideo"

export function AllVideos () {
  return (
    <div className='allvideos'>
        {StreamInfo.map((info, key) => (
            <PortadaVideo key={key} stream={info}/>
        ))}
  </div>
  )
}