import React,{useState} from "react";

const Toggle = ()=>{
    const [togle,setTogle] = useState(false)
    const change = ()=>{
        setTogle(!togle)
        console.log(togle)
        return togle
    }
    const togleFunvtion = ()=>{
        console.log(togle)
        return togle ? <p>true</p>:<p>false</p>
        

    }

    return(<div className=" tc">
<button onClick={change} > check toggle </button>
<button onClick={togleFunvtion} >show T of F</button>

    
    
    </div>)
}
export default Toggle;