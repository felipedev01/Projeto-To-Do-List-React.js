import React from 'react'

function Lista(props){

    return(

        <ul>
        {props.item.map(item=>{

          return(
            <li>{item}</li>
          )
        

        })}
        
      </ul>
    )

}export default Lista