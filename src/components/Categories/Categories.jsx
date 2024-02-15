import './Categories.css'
import React from "react"
import { CategoriesButtons } from "../CategoriesButtons/CategoriesButtons";
import { Buttons } from "../../data/datasidebar"

export function Categories() {
    return(
        <>
        <div>
            <CategoriesButtons></CategoriesButtons>
        </div>
        </>
    )
}
