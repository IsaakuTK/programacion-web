import './Body.css'
import React from "react";
import { SideBar } from "../SideBar/SideBar";
import { Categories } from "../Categories/Categories";
import { PortadaVideo } from '../PortadaVideo/PortadaVideo'

export function Body() {
  return (
    <>
    <body class="allbody">
      <div class="allcontent">
        <SideBar />
        <div>
          <Categories />
          <PortadaVideo />
        </div>

      </div>
    </body>
    </>
  );
}   

