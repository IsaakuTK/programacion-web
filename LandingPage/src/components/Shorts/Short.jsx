import React from 'react'
import './Short.css'

export function Short ({ stream = {} }) {
  return (
    <div className='AllShort'>

      <div className='ShortImageDiv'>
        <img src={stream.src} alt='Video' />
        <p className='minutess'>{stream.minutes}</p>
      </div>

      <div className='infoshort'>

        <div className='shorttexts'>
          <h1>{stream.title}</h1>
          <div className='moreinfos'>
            <p>{stream.views} visualizaciones</p>
          </div>
        </div>

      </div>

    </div>
  )
}
