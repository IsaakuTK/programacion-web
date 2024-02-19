import './ButtonSideBar.css'
import React from "react"
import { useState } from 'react'

export function ButtonSideBar({
    title = "",
    image = "",
  }) {
    return(
        <>
        <button class="all">

        <img class="imgicon" src={image} />

        <span class="lettert">{title}</span>


        </button>
        </>
    )
}
