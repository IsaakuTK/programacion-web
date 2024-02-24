import './ButtonSideBarLarge.css'
import React from "react"
import { useState } from 'react'

export function ButtonSideBarLarge ({
  title = '',
  image = ''
}) {
  return(
        <>
        <button className="al">

        <img className="imgicons" src={image} />

        <p className="letterts">{title}</p>


        </button>
        </>
    )
}
