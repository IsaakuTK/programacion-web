import './SideBar.css'
import React from "react"
import { useState } from 'react'
import { ButtonSideBar } from "../ButtonSideBar/ButtonSideBar";
import { ButtonSideBarLarge } from "../ButtonSideBarLarge/ButtonSideBarLarge";
import { Buttons } from "../../data/datasidebar"

export function SideBar({Open=false}) {

    const [open, setOpen] = useState(Open)
    
    return(
        <>
        <div className="sidebar-container">
            {Open==false &&(
                <>
                    {Buttons.map((button, noteIndex) => (
                        <ButtonSideBar key={noteIndex} title={button.title} image={button.image}></ButtonSideBar>
                    ))}
                </>
            )}

            {Open &&(
                <>
                    <div>
                    {Buttons.map((button, noteIndex) => (
                        <ButtonSideBarLarge key={noteIndex} title={button.title} image={button.image}></ButtonSideBarLarge>
                    ))}
                    </div>
                </>
            )}



        </div>
        </>
    )
}
