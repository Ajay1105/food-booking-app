import './App.css';
import React from 'react';
export default function MainContent(prop) {
    const border = prop.on ? 5 : 0
    return (
        <div className='m'>
            <img id='cart' src='./cart.svg' width="30" height="24" onClick={()=>prop.onClick(prop.id)}/>
            <img src={`./images/${prop.src}`}
                alt={prop.src} className='img'
                style={{ border: `${border}px solid black` }}
                onClick={() => prop.click(prop.id)} />
                <div className='cardData'>
                <h1 >{prop.name}</h1>
                <h3 >{prop.price}</h3>
                </div>
                <p>{prop.description}</p>
        </div>
    )
}