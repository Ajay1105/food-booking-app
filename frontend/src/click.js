import React from 'react'

export default function Click(){

    const [isTrue, setValue] = React.useState(true)
   function change(){
       setValue((prev)=>{
           return !prev
       })
   }
   const answer = isTrue?"True":"False"

   const[value,changeValue] = React.useState(0)
   function increase(){
       changeValue(prev=>{
           return ++prev
       })
   }
   function decrease(){
    changeValue(prev=>{
        return --prev
    })
   }
   
    return(
        < div className='click'>
            <button onClick={change}>{answer}</button>
            <button onClick={decrease}>-</button>
            <button >{value}</button>
            <button onClick={increase}>+</button>
        </div>
    )
}