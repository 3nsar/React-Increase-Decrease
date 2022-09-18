import { useState } from "react"
import React from 'react'


const MainContent = () => {

  const [number,setNumber] = useState(0)

  const addNumber = ()=>{
    setNumber(prevNumber => prevNumber +1)
  }

  const subNumber = ()=>{
    setNumber(prevNumber => prevNumber-1)
  }
  const resetNumber =()=>{
    setNumber(0)
  }

  return (
    <div className='main-container'>
    <h2 className='count'>{number}</h2>
    <div className="content">
        <button className='btn' onClick={subNumber }>-</button>
        <button className='btn' onClick={addNumber}>+</button>
        <button className='btn' onClick={resetNumber}>Reset</button>
    </div>
</div>
  )
}

export default MainContent

