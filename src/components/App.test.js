import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { italic } from 'ansi-colors';

const app = shallow(<App />);

describe('the app', () => {
  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });
});
