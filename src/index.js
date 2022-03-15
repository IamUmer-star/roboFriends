import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import 'tachyons';
import CheckboxWithLabel from "./CheckboxWithLabel";
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Counter from './Counter';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route exact path='/' element={<App></App>} ></Route>
     <Route exact path='checkboxPage' element={<CheckboxWithLabel></CheckboxWithLabel>} ></Route>
     <Route exact path='counterpage' element={<Counter></Counter>} ></Route>
  
  </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

