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
        <button className="allcat">

        <span className="letter">{title}</span>


        </button>
        </>
    )
}
