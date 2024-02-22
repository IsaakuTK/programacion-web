import './Body.css'
import React from "react";
import { SideBar } from "../SideBar/SideBar";
import { Categories } from "../Categories/Categories";
import { AllVideos } from '../AllVideos/AllVideos'

export function Body() {
  return (
    <>
    <body class="allbody">
      <div class="allcontent">
        <SideBar />
        <div className='ContentInside'>
          <Categories />
          <div className='All-content'>
            <AllVideos />
            <AllVideos />
            <AllVideos />
            <AllVideos />
            <AllVideos />
            <AllVideos />
          </div>
        </div>

      </div>
    </body>
    </>
  );
}   

