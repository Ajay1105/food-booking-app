import React from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';

function Price(prop) {
  return (
    <div className='price'>
    Total Price = {prop.price}
    <Button variant="outline-primary">Check Out</Button>
    </div>
  )
}

export default Price