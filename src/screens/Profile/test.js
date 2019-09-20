/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import renderer from 'react-test-renderer';
import firebase from 'react-native-firebase';
import { shallow } from 'enzyme';

import Screen from './index';
import { Provider as AuthProvider } from '../../context/Auth';

describe('Screen: Profile', () => {
  const props = {
    navigation: {
      navigate: jest.fn(),
    },
    services: {
      firebase,
    },
  };

  beforeEach(() => {
  });

  it('renders correctly', () => {
    renderer.create(<AuthProvider><Screen {...props} /></AuthProvider>);
  });

  it('Render', () => {
    expect(
      shallow(<AuthProvider><Screen {...props} /></AuthProvider>),
    ).toMatchSnapshot();
  });
});
