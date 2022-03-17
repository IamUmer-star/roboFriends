import React from "react";
import App from "./App";
import  EnzymeAdapter  from "enzyme-adapter-react-16";
import Enzyme, { shallow }  from 'enzyme';
import ReactDOM from "react-dom";
import Counter from './Counter';


Enzyme.configure({adapter:new EnzymeAdapter()})

test("HSOULD RENDER with out crashing" , ()=>{
    const data = true;

    const div = document.createElement('div');
    ReactDOM.render(<App></App>,div)
    ReactDOM.unmountComponentAtNode(div)
    if (data==false){
        throw new Error
    }
})
test('doing this and this ==',()=>{
    const wraper = shallow(<App></App>)
    expect(wraper).toBeTruthy();
})
test('counter test',()=>{
    const wraper = shallow(<Counter></Counter>)
    const appComponent = wraper.find("[data-test='component-app']");
    expect(appComponent.length).toBe(1)
    
})
test('counter-testing',()=>{
    const wraper =shallow(<Counter></Counter>)
  
    const intitialState = wraper.find("[data-test='increment-diplay']")
    expect(intitialState.text()).toBe("0")
})