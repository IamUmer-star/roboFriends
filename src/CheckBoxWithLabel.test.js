import React from 'react';
import { shallow } from 'enzyme';
import Enzyme,{EnzymeAdapter} from 'enzyme';
import CheckboxWithLabel from './CheckboxWithLabel';


Enzyme.configure({adapter:new EnzymeAdapter()})

test.skip('CheckboxWithLabel changes the text after click', () => {

  // Render a checkbox with label in the document
  const checkbox = shallow(<CheckboxWithLabel />);

  expect(checkbox).toBeTruthy();

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toEqual('On');
});