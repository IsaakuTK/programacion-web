import React from "react";
import { TopBar } from "../TopBar/TopBar";
import { SideBar } from "../SideBar/SideBar";

export function Body() {
  return (
    <>
    <header>
      <TopBar></TopBar>

    </header>

    <body>
      <SideBar></SideBar>
    </body>
    </>
  );
}   

