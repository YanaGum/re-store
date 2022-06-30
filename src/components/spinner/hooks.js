import React from "react";

const HookSwitcher = () =>{

    const [color, setColor]= useState('white');
    const [font, setFont] = useState(14)
  
    return(
      <div style={{padding: '10px', backgroundColor: color, fontSize: `${font}px`}}>
        Hello world!
        <button onClick={()=> setColor('yellow')}>White
        </button>
        <button onClick={()=> setColor('gray')}>Dark
        </button>
        <button onClick={()=> setFont((c)=>c + 22)}>+ Font</button>
        <button onClick={()=> setFont((c)=>c - 22)}> - Font</button>
      </div>
    )
  }
  
  export default HookSwitcher;