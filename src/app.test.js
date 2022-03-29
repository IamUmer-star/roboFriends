import React from "react";
import App from "./App";
import  EnzymeAdapter  from "enzyme-adapter-react-16";
import Enzyme, { shallow }  from 'enzyme';
import ReactDOM from "react-dom";
import Counter from './Counter';
import { render, fireEvent } from '@testing-library/react';


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

describe('MyComponent', () => {
    const mockCallBack = jest.fn();
  it('button click should hide component', () => {
    const closeRightSectionSpy = jest.fn();

    const { getByTestId } = render(
      <Counter onClick={closeRightSectionSpy} />
    );
  
    fireEvent.click(getByTestId('my-button'));
  
    expect(closeRightSectionSpy).toHaveBeenCalled(closeRightSectionSpy());
  });
});