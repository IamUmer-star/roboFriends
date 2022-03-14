import React from "react";
import App from "./App";

import ReactDOM from "react-dom";

test("HSOULD RENDER with out crashing" , ()=>{
    const data = true;

    const div = document.createElement('div');
    ReactDOM.render(<App></App>,div)
    ReactDOM.unmountComponentAtNode(div)
    if (data==false){
        throw new Error
    }
})
