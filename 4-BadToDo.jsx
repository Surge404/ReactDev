import './App.css'
import { useState } from 'react'
function App(){
  const [todos, setTodos] = useState([
    { title: "Laundary",
      Description: "Too Many Clothes dudeeee",
      status1: false
    },
    {
      title: "Assignments",
      Description: "Assignment Number 6",
      status1: false
    }
  ]);

  function addTodos (){
    setTodos([...todos, {
      title: "New Todos Added",
        Description: "This is the description"
      }
    ])
  }
  return (
    <div>
      <button onClick={addTodos}>Click To Add New Todos</button>
      
      {todos.map(function(rodo){
        return <Todo title = {rodo.title} Description={rodo.Description} > </Todo>
      })}
    </div>
  );
}

function Todo(props){
  return <div>
      <h1>Title is {props.title}</h1>
      <h2>Description is {props.Description}</h2>
      </div>
  
}

export default App
