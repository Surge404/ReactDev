import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
let i=4;
function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: "Gym",
    description: "Do 5 million push-ups today"
  },
{
  id: 2,
  title: "Lunch",
  description: "Eat 69 Cockraoches"
},
{
  id: 3,
  title: "End Term Preparation",
  description: "Just scroll insta broo"
}])

function addTodos(){
setTodos([...todos, {
  id: i,
  title: Math.random(),
  description: Math.random()
}])
i++;
}
return (
  <div>
  <button onClick={addTodos}>Click Me!</button>
  {todos.map(function(todo){
   return( <div key={todo.id}>
    <h1>Title: {todo.title}</h1>
    <h2>Description: {todo.description}</h2>
  </div>)
  }) 
}
</div>
)

  
}

export default App
