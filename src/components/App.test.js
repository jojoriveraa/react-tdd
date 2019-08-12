import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

describe('The gift-giver app', () => {
  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('intianizes with an empty list of gitfs', () =>{
    
  })
});
