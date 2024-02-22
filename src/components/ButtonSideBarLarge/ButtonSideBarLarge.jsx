import './ButtonSideBarLarge.css'
import React from "react"
import { useState } from 'react'

export function ButtonSideBarLarge ({
  title = '',
  image = ''
}) {
  return(
        <>
        <button class="al">

        <img class="imgicons" src={image} />

        <p class="letterts">{title}</p>


        </button>
        </>
    )
}
