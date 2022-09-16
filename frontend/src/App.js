import "./App.css";
import MainContent from "./MainContent";
import data from "./data.js";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
// import Cart from "./Cart";
import Price from "./Price";
import Card from "./components/Card.js";
import Cart from "./components/Cart.js";

function App() {
  const [data, setData] = useState([]);
  const [cartItem,addItem] =  useState([]);
  const [display,displayed] = useState(false); 

  function displayCart(){
    displayed((prev)=>{
      return !prev
    })
  }
const a= 0;
const run = ()=>{
a++
return a;
}

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  },[run==1]);

  function addToCart(name,price){
    const obj = {
      "name":name,
      "price":price
    }
    
  addItem((prev)=>{
     return[...prev,{obj}]
   })
   
  }

  var itemData = data.map((singleData) => {
    var base64String = btoa(
      new Uint8Array(singleData.img.data.data).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ""
      )
    );
    return (
      <Card
        id = {singleData._id}
        key = {singleData._id}
        src={`data:image/png;base64,${base64String}`}
        name={singleData.name}
        price={singleData.price}
        description="This is description and description will be showed here and i for now i don't have anything to write"
        onClick={addToCart}
      />
    );
  });

  //{console.log(data)}
  // {console.log(cartItem)}
  return (
    <div>
    <Navbar click={displayCart}/>
    {display && <Cart click={displayCart}/> }
      <div className="main">
        {itemData}
        {itemData}
        {itemData}
      </div>
    </div>
  );
}

export default App;
