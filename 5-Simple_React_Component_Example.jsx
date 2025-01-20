import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
      <Header1 title = "Tanmay 1" />
      <Header2 title = "Tanmay 2" />
  </>
  )
}

//Both header1 and header2 achieve the same task. 
//Header2 usese the concept of object destructuring
function Header1(props){
  return <div>
    <h1>{props.title}</h1>
  </div>
}

function Header2({title}){
  return <div>
    {title}
  </div>
}
export default App
