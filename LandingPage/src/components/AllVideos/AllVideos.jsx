import './AllVideos.css'; 
import React from 'react';
import { useState } from 'react'
import { StreamInfo } from "../../data/streamsinfo"
import { PortadaVideo } from  "../PortadaVideo/PortadaVideo"

export function AllVideos () {

  const [ipadVariables, setIpadVariables] = useState(StreamInfo);

  useState(() => {
    const primerasDos = StreamInfo.slice(0, 2);
    setIpadVariables(primerasDos);
}, []);

  return (
    <div className='allofallvideos'>
      <div className='allvideos'>
          {StreamInfo.map((info, key) => (
              <PortadaVideo key={key} stream={info}/>
          ))}
      </div>

      <div className='allvideos-ipad'>
      {ipadVariables.map((info, key) => (
              <PortadaVideo key={key} stream={info}/>
          ))}
        </div>
  </div>
  )
}