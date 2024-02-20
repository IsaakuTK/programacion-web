import './PortadaVideo.css'; 
import React from 'react';

export function PortadaVideo () {
  return (
    <div className="video-thumbnail">
      <img src="https://i.ytimg.com/vi/XXYlFuWEuKI/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAVxfT5zvzKOwFKKlZESGDIerVWHA" alt="Video Thumbnail" />
      <div className="video-details">
        <h3>siuuu</h3>
        <p>siuuu</p>
        <p>{1} visualizaciones</p>
        <p>hace {2}</p>
      </div>
    </div>
  )
}