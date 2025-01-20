import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
function App() {
  const [title, setTitle] = useState("Tanmay")

  function ChangeName(){
    setTitle(`${Math.random()}`)
  }
  return (
  <>
      <button onClick={ChangeName}>Click To Change tahe Name</button>
      <Header1 title = {title} />
      <Header1 title = "Tanmay 2" />
      <Header1 title = "Tanmay 3" />
      <Header1 title = "Tanmay 4" />
      <Header1 title = "Tanmay 5" />
  </>
  )
}

const Header1=React.memo(
  function(props){
    return (
    <div>
    <h1>{props.title}</h1>
    <h1>Gibberish</h1>
    </div>
    )
  }
);

export default App
