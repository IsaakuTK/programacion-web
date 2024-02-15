import './CategoriesButtons.css'
import Youtube from "../../Images/youtube.png"
import React from "react"
import { useState } from 'react'

export function CategoriesButtons() {
    return(
        <>
         <nav class='DivTopBar'>

            <div class="left"> 
                <div class="displayButDiv">
                    <button class="displayButBut">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" stroke="white" viewBox="0 0 24 24">
                        <path stroke="white" strokeLinecap="round" strokeWidth="1.5" d="M5 7h14M5 12h14M5 17h14"/>
                        </svg>
                    </button>
                </div>

                <div class="allIconY">
                    <img class="YoutubeIcon" src={Youtube} alt="" />
                    <span class="country-code">CO</span>
                </div>
            </div>

            <div class="center">
                <div class="search-container">
                    <input class="search-input" type="text" id="search" placeholder="Buscar"/>
                    <button class="search-button">
                        <svg class="searchvec" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                </div>
                <button class="microphonebutton">
                    <svg class="microphone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                    <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
                    <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
                    </svg>
                </button>
            </div>

            <div class="right">
                    <div class="displayButDiv">
                        <svg class="displayBut2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                        </svg>
                    </div>

                    <div class="acceder">
                        <svg class="displayBut" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <p class="accederText">Acceder</p>
                    </div>
            </div>

         </nav>
        </>
    )
}
