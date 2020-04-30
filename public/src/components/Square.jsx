import React from 'react'

function Button (props)
{
    
   return <button onClick={()=> props.callfn(props.val)} className="square">
    {props.playerdata[props.val]}
  </button>

}

export default Button;