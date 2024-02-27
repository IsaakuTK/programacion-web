import './ButtonSideBar.css'
import React from 'react'

export function ButtonSideBar ({
  title = '',
  image = ''
}) {
  return (
    <>
      <button className='all'>

        <img className='imgicon' src={image} />

        <span className='lettert'>{title}</span>

      </button>
    </>
  )
}
