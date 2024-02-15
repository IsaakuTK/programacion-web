import React from "react"
import { useState } from 'react'

export function ButtonSideBar({
    title = "",
    image = "",
  }) {
    return(
        <>
        <div class="all">

        <img src={image} />

        <span class="">{title}</span>

        </div>
        </>
    )
}
