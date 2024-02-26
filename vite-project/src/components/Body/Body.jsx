import "./Body.css"
import React, { useState, useEffect } from 'react';
import { SecretPopUp } from "../SecretPopUp/SecretPopUp"
import axios from 'axios';
export function Body(){
 
    const [counter, setCounter] = useState(1);
    const [dataPoke, setDataPoke] = useState({});
    const [openSecret, setOpenSecret] = useState(false);

    useEffect(() => {
      const fetchPokemon = async () => {
        try {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${counter}`);
          setDataPoke(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
          setDataPoke({name:'NOT FOUND', sprites:{front_default:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1d697983-1fff-48d2-9e67-d2241cfe68ce/d8eep8m-8d89b777-81a8-4def-b7b5-d13262cbe889.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFkNjk3OTgzLTFmZmYtNDhkMi05ZTY3LWQyMjQxY2ZlNjhjZVwvZDhlZXA4bS04ZDg5Yjc3Ny04MWE4LTRkZWYtYjdiNS1kMTMyNjJjYmU4ODkuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.uPQEMFAxuQ_JPYITeO6AOzAkTzUuiwk73dz7a3vx3IA"}})
        }
      };
  
      fetchPokemon();
    }, [counter]);
 

    const secretActive = () => {
      setOpenSecret(false)
      setCounter(94)
    };

    const handleClick1 = () => {
        setCounter(counter + 1);
    };

    const handleClick2 = () => {
      if (counter > 1) {
        setCounter(counter - 1);
      }
    };

    const resetClick = () => {
      setCounter(1);
  };

    return(
      <body className="bigcontainer">
        <div className="allcontent">

          <button onClick={handleClick2}>-</button>

            <div className="flip-card">
            <button onClick={resetClick}>RESET</button>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <p className="title">POKEMON N°</p>
                        <p>{counter}</p>
                    </div>
                    <div className="flip-card-back">
                        <p className="title">{dataPoke.name}</p>
                        {dataPoke.sprites && (
                          <img src={dataPoke.sprites.front_default} alt={dataPoke.name} />
                        )}
                    </div>
                </div>
            </div>

          <button onClick={handleClick1}>+</button>
        </div>
        <div className="secrets">
              { openSecret && (
                <>
                  <SecretPopUp onClose={()=>secretActive()}></SecretPopUp>
                  <img src="https://www.icegif.com/wp-content/uploads/2023/05/icegif-932.gif" />
                </>
              )}
              <p className="secrettext">
              SECRET POKEMON TOUCH HERE! :O
              </p>
              <button
              onClick={()=>setOpenSecret(true)}>Click Here</button>
          </div>
      </body>
    )
}