import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
  <>
       <Header1 />
      <Header title = "Tanmay 2" />
      <Header title = "Tanmay 2" />
      <Header title = "Tanmay 2" />
  </>
  )
}

//Both header1 and header2 achieve the same task. 
//Header2 usese the concept of object destructuring
function Header1(props){
  const [title, setTitle] = useState("Tanmay")
  function ChangeName(){
    setTitle(`${Math.random()}`)
  }

  return (
  <div>
  <button onClick={ChangeName}>Click To Change the Name</button>
  <h1>{title}</h1>
  <h1>Gibberish</h1>
  </div>
  )
}

function Header(props){
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

export default App
