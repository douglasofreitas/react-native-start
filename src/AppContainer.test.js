/**
 * @format
 */

import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';
import AppContainer from './AppContainer';

// Note: test renderer must be required after react-native.

/*
it('renders correctly', () => {
  renderer.create(<AppContainer />);
});
*/

// Using Jest + Enzyme
describe('<App />', () => {
  it('renders correctly, test using Jest + Enzyme', () => {
    expect(shallow(<AppContainer />)).toMatchSnapshot();
  });
});
