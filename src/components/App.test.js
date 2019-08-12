import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

describe('The gift-giver app', () => {
  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('intianizes with an empty list of gitfs', () => {
    expect(app.state().gifts).toEqual([]);
  });

  it('add gift to `state` when clicking the `add gift` button', () => {
    app.find('.btn-add').simulate('click');
    expect(app.state().gifts).toEqual([{ id: 1 }]);
  });
});
