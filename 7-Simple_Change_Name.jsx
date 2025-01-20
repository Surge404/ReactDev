import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState("Tanmay")

  function ChangeName(){
    setTitle(`${Math.random()}`)
  }
  return (
  <>
      <button onClick={ChangeName}>Click To Change the Name</button>
      <Header1 title = {title} />
      <Header1 title = "Tanmay 2" />
  </>
  )
}

//Both header1 and header2 achieve the same task. 
//Header2 usese the concept of object destructuring
function Header1(props){
  return (
  <div>
  <h1>{props.title}</h1>
  <h1>Gibberish</h1>
  </div>
  )
}

export default App
