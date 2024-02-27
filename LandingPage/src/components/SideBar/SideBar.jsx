import './SideBar.css'
import React from 'react'

import { ButtonSideBar } from '../ButtonSideBar/ButtonSideBar'
import { ButtonSideBarLarge } from '../ButtonSideBarLarge/ButtonSideBarLarge'
import { Buttons } from '../../data/datasidebar'

export function SideBar ({ Open = false }) {
  return (
    <>
      <div className='sidebar-container'>
        {Open === false && (
          <>
            {Buttons.map((button, noteIndex) => (
              <ButtonSideBar key={noteIndex} title={button.title} image={button.image} />
            ))}
          </>
        )}

        {Open && (
          <>
            <div>
              {Buttons.map((button, noteIndex) => (
                <ButtonSideBarLarge key={noteIndex} title={button.title} image={button.image} />
              ))}
            </div>
          </>
        )}
      </div>
      <div className='fulldownbar'>
        <ButtonSideBar key='some' title='Principal' image='https://icon-library.com/images/white-home-icon-png/white-home-icon-png-21.jpg' />
        <ButtonSideBar key='some' title='Shorts' image='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-shorts-white-icon.png' />
        <ButtonSideBar key='some' title='Hitorial' image='https://cdn.icon-icons.com/icons2/2483/PNG/512/history_icon_149927.png' />
      </div>
    </>
  )
}
