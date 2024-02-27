import './CategoriesButtons.css'
import React from 'react'

// id:crypto.randomUUID()
export function CategoriesButtons ({
  title = ''
}) {
  return (
    <>
      <button className='allcat'>

        <span className='letter'>{title}</span>

      </button>
    </>
  )
}
