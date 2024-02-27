import './Body.css'
import React from 'react'
import { SideBar } from '../SideBar/SideBar'
import { Categories } from '../Categories/Categories'
import { AllVideos } from '../AllVideos/AllVideos'
import { AllShorts } from '../AllShorts/AllShorts'

export function Body () {
  return (
    <>
      <body className='allbody'>
        <div className='allcontent'>
          <SideBar />
          <div className='ContentInside'>
            <Categories />
            <div className='All-content-inside'>
              <div className='Padding-container'>
                <AllVideos />
                <AllVideos />
                <AllShorts />
                <AllVideos />
                <AllVideos />
                <AllVideos />
              </div>
            </div>
          </div>

        </div>
      </body>
    </>
  )
}
