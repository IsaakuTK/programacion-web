import './SideBar.css'
import React from "react"
import { useState } from 'react'
import { ButtonSideBar } from "../ButtonSideBar/ButtonSideBar";
import { Buttons } from "../../data/datasidebar"

export function SideBar() {
    return(
        <>
        <div class="sidebar-container">
            
                {Buttons.map((button, noteIndex) => (
                    <ButtonSideBar key={noteIndex} title={button.title} image={button.image}></ButtonSideBar>
                ))}


        </div>
        </>
    )
}
