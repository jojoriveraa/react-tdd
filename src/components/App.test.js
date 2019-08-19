import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App [gift-giver]', () => {
  const app = shallow(<App />);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('initializes with an empty list of gitfs', () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe('when `add gift` button is clicked', () => {
    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    });

    afterEach(() => {
      app.setState({ gifts: [] });
    });

    it('should add a gift to `state`', () => {
      expect(app.state().gifts).toEqual([{ id: 1 }]);
    });

    it('should add a new gift to the rendered list', () => {
      expect(app.find('.gift-list').children().length).toEqual(true);
    });
  });
});
