
import React,{useState} from 'react';

const Counter = ()=>{
    const counts = 0
    const [count,setCount] =useState(counts)
    const onClicks = ()=>{
        return setCount(count+1)
    }
    return(
        <div className='tc br3 pa2' data-test='component-app'>
            <button  onClick={onClicks} >CLick</button>
            <p data-test='increment-diplay'>{count}</p>

        </div>
    )
}
export default Counter;