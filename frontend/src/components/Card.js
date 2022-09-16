import "../App.css";
import React from "react";
import { Button } from "react-bootstrap";

export default function Card(prop) {
  return (
    <div className="m">
      <img
        src={prop.src}
        alt={prop.src}
        className="img"
        onClick={() => prop.click(prop.id)}
      />
      <div className="cardData">
        <h1>{prop.name}</h1>
        <h3>{prop.price}</h3>
      </div>
      <p>{prop.description}</p>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => prop.onClick(prop.name,prop.price)}
      >
        Add to Cart
      </button>
    </div>
  );
}
