import React from "react";

const Card =({id,name})=>{
    return(
        <div className='bg-light-green dib br3 ma2 grow'>
            <img src={`https://robohash.org/${id}?200x200`} alt="image" ></img>
            <div>
                <h2>{name}</h2>
                <p>{id}</p>
            </div>
        </div>
    )
};
export default Card;