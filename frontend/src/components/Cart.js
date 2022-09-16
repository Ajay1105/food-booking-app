import { json } from "body-parser";
import React from "react";
import "../componentCSS/cart.css";
import close from "../svg/close.svg";

function Cart(prop) {
  const d = JSON.parse(localStorage.getItem("cart"));
  // const c = d.forEach(element => {
  //   return element;
  // });
  const f =d[0]
  return (
    <div className="cart">

      <div className="heading2">
        <h1>Cart</h1>
        <img src={close} onClick={prop.click} />
      </div>

      <div className="cartItem">
        {d}
        {console.log(d)}
      </div>

    </div>
  );
}

export default Cart;
