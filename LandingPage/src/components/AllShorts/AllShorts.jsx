import './AllShorts.css'
import React, { useState } from 'react'
import { ShortsInfo } from '../../data/shortinfo'
import { Short } from '../Shorts/Short'

export function AllShorts () {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className='allcontentshorts'>
        <div className='shorttittle'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Youtube_shorts_icon.svg/824px-Youtube_shorts_icon.svg.png' alt='' />
          <h1>Shorts</h1>
        </div>
        <div className='allshorts'>
          {ShortsInfo.map((info, key) => (
            <Short key={key} stream={info} />
          ))}
        </div>

        {open === false && (
          <div className='allshowb'>
            <hr />

            <button
              className='butshow'
              onClick={() => setOpen(true)}
            >
              Mostrar mas
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='arrows'>
                <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
              </svg>
            </button>

            <hr />
          </div>
        )}

        {open === true && (
          <>
            <div className='allshorts'>
              {ShortsInfo.map((info, key) => (
                <Short key={key} stream={info} />
              ))}
            </div>

            <div className='allshowb'>
              <hr />

              <button
                className='butshow'
                onClick={() => setOpen(false)}
              >
                Mostrar menos
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='arrows'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 15.75 7.5-7.5 7.5 7.5' />
                </svg>
              </button>

              <hr />
            </div>
          </>
        )}

      </div>
    </>
  )
}
