import React from "react";


const SearchBox = ({searchfield,onSearchChange})=>{
    return(
        <div className="pa2" >
            <input className="pa2 ba b--green bg-lightest-blue" 
            type={'search'} placeholder={'search-robots'}
            onChange={onSearchChange} ></input>
        </div>
    )
    
}
export default SearchBox;