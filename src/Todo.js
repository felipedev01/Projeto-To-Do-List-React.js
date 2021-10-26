
import { useState } from 'react';
import './Todo.css';

function App() {

  const [texto , setarTexto]=useState("")

  function mudarTexto(event){

    let t=event.target.value

    setarTexto(t)
  }
  return (
    <div className="Container">
      <h1>To do list</h1>
      <form>
        <input type="text" onChange={mudarTexto}></input>
        <button>Add</button>
      </form>
      <ul>
        <li>{texto}</li>
        <li>{texto}</li>
        <li>{texto}</li>
        <li>{texto}</li>
        <li>{texto}</li>
      </ul>
    </div>
  );
}

export default App;
