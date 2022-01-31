import React from 'react'
import Image3 from "../Assests/3.png"
import Coin from "../Assests/Coin.jpg"
import GameCoin from "../Assests/GameCoin.png"


import {HiArrowSmRight, HiArrowSmLeft} from "react-icons/hi"
import "./tokenConverter.css"

const TokenConverter=()=> {
    return (
        <>
        <div className="tokenConverter-style">
            {/* <h3 className="converter-heading">Instant Converter</h3> */}
           <div className="col-md-12 converter-outer-columns" >
               <div className="col-md-4">

               </div>
               <div className="col-md-8">
               <h3 className="converter-heading">Instant Converter</h3>

<div className="col-md-12 coverter-column-flex">
<div className="background-border-converter">
    <div className="col-md-6 convert-roxo-allData">
<img src={Image3} alt="Image3" height="100x" width="100px"/>
<div className="roxo-coin-converter">
    <h6>Roxo Coin</h6>
    <p>1783.12 ROXO</p>
</div>
    </div>
<div className="converter-middleArrow">
    <HiArrowSmRight size={60}/>
    <HiArrowSmLeft  size={60}/>
</div>

    <div className="col-md-6  convert-gameCoin-allData">
    <img src={GameCoin} alt="Image3" height="80x" width="80px"/>
<div className="game-coin-converter">
    <h6>Game Coin</h6>
    <p>778622</p>
</div>
 
</div>
</div>
</div>
<div className="token-convert-button">
<button className="token-convert-button-style" data-bs-toggle="modal"
              data-bs-target="#convertModal" >CONVERT </button>
</div>


</div> 
</div> 

         </div> 
        </>
    )
}

export default TokenConverter;
