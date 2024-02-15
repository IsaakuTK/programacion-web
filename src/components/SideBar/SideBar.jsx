import React from "react"
import { useState } from 'react'
import { ButtonSideBar } from "../ButtonSideBar/ButtonSideBar";
import { Buttons } from "../../data/datasidebar"

export function SideBar() {
    return(
        <>
        <div class="all">
            
            <div>
                {Buttons.map((button, noteIndex) => (
                    <ButtonSideBar title={button.title} image={button.image}></ButtonSideBar>
                ))}

            </div>

        </div>
        </>
    )
}
