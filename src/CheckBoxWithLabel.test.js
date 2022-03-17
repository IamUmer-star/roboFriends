import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import  EnzymeAdapter  from 'enzyme-adapter-react-16';
import CheckboxWithLabel from './CheckboxWithLabel';


Enzyme.configure({adapter:new EnzymeAdapter()})

test('CheckboxWithLabel changes the text after click', () => {

  // Render a checkbox with label in the document
  const checkbox = shallow(<CheckboxWithLabel />);

  expect(checkbox).toBeTruthy();
  const cBox = checkbox.find('input');

  cBox.simulate('change')

  expect(cBox.text()).toEqual('');
});