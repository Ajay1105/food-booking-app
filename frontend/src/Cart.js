import React from "react";
import './App.css';

export default function Cart(prop){
    return(
        <div className="cart">
        <p style={{"font-size": "40px"}}>{prop.cardData.name }</p>
        <p style={{"font-size": "35px"}}>Price = {prop.cardData.price}</p>
        <img src="logo.svg" alt="A"/>
        </div>
    )
}