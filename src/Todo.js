
import { useState } from 'react';
import './Todo.css';
import Lista from './Lista'
import TodoForm from './TodoForm';


function App() {

 
  const [item, setItem]=useState([])

  function onAddItem(it){

     setItem([...item,it])
  }

  
     
  return (
    <div className="Container">
      <h1>To do list</h1>
      
      <TodoForm onAddItem={onAddItem}></TodoForm>
      <Lista item={item}></Lista>

      
     
    </div>
  );
}


export default App;
