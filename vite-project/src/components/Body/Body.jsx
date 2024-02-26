import "./Body.css"
import React, { useState } from "react";
export function Body(){
 
    const [counter, setCounter] = useState(0);
 
    const handleClick1 = () => {
        setCounter(counter + 1);
    };

    const handleClick2 = () => {
        setCounter(counter - 1);
    };


    return(
      <body>
        <div className="allcontent">

          <button>
            -
          </button>

            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <p class="title">FLIP CARD</p>
                        <p>Pokemon Info</p>
                    </div>
                    <div class="flip-card-back">
                        <p class="title">BACK</p>
                        <p>Leave Me</p>
                    </div>
                </div>
            </div>

          <button>
            +
          </button>

        </div>
      </body>
    )
}