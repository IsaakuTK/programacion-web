import './SideBar.css'
import React from "react"
import { useState } from 'react'
import { ButtonSideBar } from "../ButtonSideBar/ButtonSideBar";
import { Buttons } from "../../data/datasidebar"

export function SideBar({Open=true}) {
    return(
        <>
        <div class="sidebar-container">
            {Open==false &&(
                <>
                    {Buttons.map((button, noteIndex) => (
                        <ButtonSideBar key={noteIndex} title={button.title} image={button.image}></ButtonSideBar>
                    ))}
                </>
            )}

            {Open &&(
                <>
                    {Buttons.map((button, noteIndex) => (
                        <ButtonSideBar key={noteIndex} title={button.title} image={button.image}></ButtonSideBar>
                    ))}
                </>
            )}



        </div>
        </>
    )
}
