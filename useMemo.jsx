//1. Less Efficient method(for loop runs unnecessarily anytime that button is pressed or a value is entered

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState(1)
  let  sum = 0;
  // sum=(inputValue+1)*(inputValue)/2
  for(let i = 1;i<=inputValue;i++){
    sum=sum+i;
  }

  return (
    <>
    <input onChange={function(e){
      setInputValue(parseInt(e.target.value));
    }}
    placeholder='Enter the number' />
    <br />
    <br />sum from 1 to inputValue is {sum} 
    <br />
    <br />
    <button onClick={()=>{
      setCounter(counter+1);
    }}>Counter ({counter})</button>
    <button></button>
    </>
  )
}

export default App;



// Using the useEffect function to make sure that the for loop does not run unnecesrily
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState(1)
  const [finalValue, setFinalValue] = useState(0)
  useEffect(()=>{
    let  sum = 0;
    // sum=(inputValue+1)*(inputValue)/2
    for(let i = 1;i<=inputValue;i++){
      sum=sum+i;
    }
    setFinalValue(sum);
  }
  , [inputValue])
  return (
    <>
    <input onChange={function(e){
      setInputValue(parseInt(e.target.value));
    }}
    placeholder='Enter the number' />
    <br />
    <br />sum from 1 to inputValue is {finalValue} 
    <br />
    <br />
    <button onClick={()=>{
      setCounter(counter+1);
    }}>Counter ({counter})</button>
    <button></button>
    </>
  )
}

export default App;



// 


