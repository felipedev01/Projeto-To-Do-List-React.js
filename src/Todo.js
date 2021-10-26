
import { useState } from 'react';
import './Todo.css';
import Lista from './Lista'


function App() {

  const [texto , setarTexto]=useState("")
  const [item, setItem]=useState([])

  function mudarTexto(event){

    let t=event.target.value

    setarTexto(t)
  }

   function adicionarItem(event){

    event.preventDefault();

     setItem([...item, texto])
     setarTexto("")
   }
     function deletarItem(event){
     
      event.preventDefault();
      setItem()

     }
  return (
    <div className="Container">
      <h1>To do list</h1>
      <form>
        <input type="text" onChange={mudarTexto} value={texto}></input>
        <button onClick={adicionarItem}>Add</button>
        <button onClick={deletarItem}>Delete </button>
      </form>

      <Lista item={item}></Lista>
     
    </div>
  );
}

export default App;
