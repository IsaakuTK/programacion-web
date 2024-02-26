import "./Footer.css"
import React from 'react'
import {SecretPopUp} from "../SecretPopUp/SecretPopUp"
export function Footer(){
    return(
      <footer className="footer">
        <div>
          <SecretPopUp></SecretPopUp>
          <p className="secrettext">
          SECRET POKEMON TOUCH HERE! :O
          </p>
          <button>Click Here</button>
        </div>
      </footer>
    )
}