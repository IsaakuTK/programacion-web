import React from 'react';
import './PortadaVideo.css';

export function PortadaVideo({ stream = {} }) {
  return (
    <div className='AllChannelVideos'>

      <div className="VideoImageDiv">
        <img src={stream.src} alt="Video" />
        <p className='minutes'>{stream.minutes}</p>
      </div>

      <div className='infovideo'>

        <div>
          <img className="profilechannel" src={stream.src} alt="Channel Profile" />
        </div>
  
        <div className="videotexts">
          <h1>{stream.title}</h1>
          <p>{stream.streamer_name}</p>
          <div className="moreinfo">
            <p>{stream.views} visualizaciones</p>
            <p>&nbsp; • &nbsp;</p>
            <p>hace{stream.since}</p>  
          </div>
        </div>
        
      </div>

    </div>
  )
}