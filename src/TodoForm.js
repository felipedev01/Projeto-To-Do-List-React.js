import React from 'react'
import { useState } from 'react';


function TodoForm(props){


    const [texto , setarTexto]=useState("")
    
  
    function adicionarItem(event){
  
      event.preventDefault();
  
      props.onAddItem(texto)
       setarTexto("")
  
       
     }
     function mudarTexto(event){
  
      let t=event.target.value
  
      setarTexto(t)
    }
  
  
    return(
  
      <form>
      <input type="text" onChange={mudarTexto} value={texto}></input>
      <button onClick={adicionarItem}>Add</button>
      <button >Delete </button>
    </form>
  
  
    )
    
  
  
  }export default TodoForm