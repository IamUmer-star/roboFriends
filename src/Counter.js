
import React,{useState} from 'react';

const Counter = ()=>{
    const counts = 0
    const [count,setCount] =useState(counts)
    const onClicks = ()=>{
        return setCount(count+1)
    }
    return(
        <div className='tc br3 pa2' data-test='component-app'>
            <button data-testid ='my-button' className='test-button' onClick={onClicks} >Click</button>
            <p data-test='increment-diplay'>{count}</p>

        </div>
    )
}
export default Counter;