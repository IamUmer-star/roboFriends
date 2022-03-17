import User from './fuser';
import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import  EnzymeAdapter  from 'enzyme-adapter-react-16';
import axios from 'axios';

jest.mock('axios');

Enzyme.configure({adapter:new EnzymeAdapter()})


test('Checking fetched data',()=>{
    const wrapper = shallow(<User></User>)
    
    
   
})
describe('Testing api',()=>{
    const data ={
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
    }
    const onComplete = jest.fn();
    beforeEach(() => {
        axios.get.mockResolvedValue(data);
    });
    
    it('should call axios get with given url', () => {
        function getResource(url, onComplete) {
            
            axios
              .get(url)
          
              .then((res) => {
                res ? _onSuccess(res) : _onError(res)
              }, error => 'Error')
          
              .catch(error => 'Error')
          }
        const url ='https://jsonplaceholder.typicode.com/users/1'
        getResource(url,onComplete);
        expect(axios.get(url)).resolves.toEqual(data)  
        expect(axios.get).toBeCalledWith(url);
    });
})
