import React,{useState, useImperativeHandle, forwardRef} from "react";


 export const Button = forwardRef((ref,props)=>{



    const [toggle, setToggle] = useState(false);
    useImperativeHandle(ref,()=>{
        
    })

    return(<div>



        <button onClick={()=>setToggle(!toggle)} >
            Button from child
        </button>
        {toggle || <span> Toggle</span>}
    </div>)



});