import './App.css'
import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);
  return (
      
      <div>
        <CustomButton count={count} setCount={setCount}></CustomButton>
      </div>
  )
}
//component 
function CustomButton(props){
  function clickHandler(){
    props.setCount(props.count+1);
  }
  return (<button onClick={clickHandler}>The Value of counter is {props.count}</button>)
}
export default App
