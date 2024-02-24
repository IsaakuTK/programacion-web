import './DownListButtons.css'
import React from "react"

export function DownListButtons({
    title = '',
    image = ''
}) {
    return(
        <>
            <div className='d-but'>
                <img src={image} />
                <p>{title}</p>
            </div>
        </>
    )
}
