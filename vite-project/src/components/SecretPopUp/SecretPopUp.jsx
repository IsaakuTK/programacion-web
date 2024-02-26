import "./SecretPopUp.css"
import React from "react";
export function SecretPopUp(){
    return(
      <body>
        <div className="allcontent">

            <div class="container">
                <div class="radio-wrapper">
                    <input class="input" name="btn" id="value-2" checked="true" type="radio"/>
                    <div class="btn">
                    CONTINUE?<span aria-hidden="">_</span>
                    <span class="btn__glitch" aria-hidden="">_S_U_R_E_</span>
                    <label class="number">SCRT</label>
                    </div>
                </div>
            </div>

        </div>
      </body>
    )
}