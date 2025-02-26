import React, { useContext, useState } from "react";
import { CountContext } from "./context";

function App(){
  const [count, setCount] = useState(0);
  return <div>
    <CountContext.Provider value={{count, setCount}} >
      <Count />
    </CountContext.Provider>
  </div>
}

function Count(){
  return <div>
    <CountRenderer></CountRenderer>
    <Buttons></Buttons>
  </div>
}

function Buttons(){
  const {count, setCount} = useContext(CountContext);
  return <div>
    <button onClick={()=>{
      setCount(count+1); 
    }}>Increase</button>

    <button onClick={()=>{
      setCount(count-1);
    }}>Decrease</button>
  </div>
}

function CountRenderer(){
  const {count} = useContext(CountContext);
  return <div>
    {count}
  </div>
}

export default App;
