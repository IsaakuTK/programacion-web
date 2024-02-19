import './Body.css'
import React from "react";
import { SideBar } from "../SideBar/SideBar";
import { Categories } from "../Categories/Categories";

export function Body() {
  return (
    <>
    <body class="allbody">
      <div class="allcontent">
        <SideBar></SideBar>

        <Categories></Categories>
      </div>
    </body>
    </>
  );
}   

