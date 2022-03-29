
import React, { useReducer, useRef,useLayoutEffect, useEffect , useState } from "react";
import {Button} from './buttonimartive.js'


export const Count = ()=>{


  const [count , dispatch  ] = useReducer((state,action)=>{
    switch(action){
      case 'add':
        return state +1
      case '-':
         return state -1
         case'cslog':
         console.log(state)
      default:
        return state
    
    }
  },0)
  const inputref= useRef('dingdong');
  const buttonRef = useRef(null)

  const [ thvalue,setThVale] = useState(inputref)

  const handelChange = ()=>{
    console.log(inputref.current.value)
    setThVale(inputref.current.value)
  }
  useLayoutEffect(()=>{
    console.log("uselayouteffect")
  },[]);
  useEffect(()=>{
    console.log( 'this is useEFFect hook')
  },[])
  return(
    <div>
      {count}
      <h1>some tests {inputref.current.value}</h1>
      <input onChange={handelChange} onClick={()=>{dispatch('cslog')}} ref={inputref}  ></input>
      <button onClick={()=>{dispatch('add')}} >increase</button>
      <button onClick={()=>{dispatch('-')}} >decrese</button>
      <button>button feo parant</button>
      <Button ref={buttonRef}></Button>
    </div>
  ) 
}