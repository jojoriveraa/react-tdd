import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Gift from './Gift';

describe('App [gift-giver]', () => {
  const app = shallow(<App />);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('initializes with an empty list of gitfs', () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe('when `add gift` button is clicked', () => {
    const id = 1;

    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    });

    afterEach(() => {
      app.setState({ gifts: [] });
    });

    it('should add a gift to `state`', () => {
      expect(app.state().gifts).toEqual([{ id }]);
    });

    it('should add a new gift to the rendered list', () => {
      expect(app.find('.gift-list').children().length).toEqual(1);
    });

    it('should create a Gift component', () => {
      expect(app.find('Gift').exists()).toBe(true);
    });

    describe('and the user wants to remove the added gift', () => {
      beforeEach(() => {
        app.instance().removeGift(id);
      });

      it('removes the gift from `state`', () => {});
    });
  });
});
