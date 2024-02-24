import './Categories.css'
import React from "react"
import { CategoriesButtons } from "../CategoriesButtons/CategoriesButtons";
import { CategoriesB } from "../../data/categories"

export function Categories() {
    return(
        <>
        <div className="all2">
                {CategoriesB.map((button, noteIndex) => (
                    <CategoriesButtons key={noteIndex} title={button.title}></CategoriesButtons>
                    ))}
        </div>
        </>
    )
}
