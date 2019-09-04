/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { Screen } from './index';
import { Provider as AuthProvider } from '../../context/Auth';

describe('Screen: Health', () => {
  const props = {
    navigation: {
      navigate: jest.fn(),
    },
  };

  beforeEach(() => {
  });

  it('renders correctly', () => {
    renderer.create(<AuthProvider><Screen {...props} /></AuthProvider>);
  });

  it('snapshot', () => {
    expect(
      shallow(<AuthProvider><Screen {...props} /></AuthProvider>),
    ).toMatchSnapshot();
  });
});
