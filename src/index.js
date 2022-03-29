import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import 'tachyons';
import CheckboxWithLabel from "./CheckboxWithLabel";
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Counter from './Counter';
import Toggle from './toggle';
import {Count } from './input'
import { Game } from './tictak';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route exact path='/' element={<App></App>} ></Route>
     <Route exact path='checkboxPage' element={<CheckboxWithLabel></CheckboxWithLabel>} ></Route>
     <Route exact path='counterpage' element={<Counter></Counter>} ></Route>
     <Route exact path='togglepage' element={<Game></Game>} ></Route>
     <Route exact path='tictakgame' element={<Count></Count>} ></Route>
  
  </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

