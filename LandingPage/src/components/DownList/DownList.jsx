import './DownList.css'
import { DownListButtons } from '../DownListButtons/DownListButtons'
import { List } from '../../data/dlistinfo'
import React from "react"

export function DownList() {
    return(
        <>
        <div className='downlistall'>
        {List.map((button, noteIndex) => (
                    <DownListButtons key={noteIndex} title={button.title} image={button.image}></DownListButtons>
                    ))}
        </div>
        </>
    )
}
