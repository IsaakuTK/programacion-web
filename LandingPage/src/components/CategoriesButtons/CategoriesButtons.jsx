import './CategoriesButtons.css'
import Youtube from "../../Images/youtube.png"
import React from "react"
import { useState } from 'react'
// id:crypto.randomUUID()
export function CategoriesButtons({
    title = ""
  }) {
    return(
        <>
        <button class="allcat">

        <span class="letter">{title}</span>


        </button>
        </>
    )
}
