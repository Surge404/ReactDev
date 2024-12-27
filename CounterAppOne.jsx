import './App.css'

function App() {

  let state = {
    count: 0
  }

  function OnClickHandler(){
    
    state.count=state.count+1;
    console.log(state.count); 
  }
  return (
      
      <div>
        <button onClick={OnClickHandler}>counter ki value is {state.count}</button>
      </div>

  )
}

export default App
