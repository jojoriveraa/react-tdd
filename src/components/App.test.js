import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

describe('The gift-giver', () => {
  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('initializes with an empty list of gitfs', () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe('when `add gift` is clicked', () => {
    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    });

    it('should add a gift to `state`', () => {
      expect(app.state().gifts).toEqual([{ id: 1 }]);
    });

    it('should add a new gift to the rendered list', () => {
      expect(app.find('.gift-list').children().length).toEqual(2);
    });
  });
});
