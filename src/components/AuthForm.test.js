/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Button,
} from 'react-native';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import AuthForm from './AuthForm';

describe('Component: AuthForm', () => {
  const props = {
    headerText: '',
    errorMessage: '',
    onSubmit: jest.fn(async () => {
      // console.log('call signin');
    }),
    submitButtonText: '',
  };

  beforeEach(() => {
    props.onSubmit.mockClear();
  });

  it('Render', () => {
    expect(
      shallow(<AuthForm {...props} />),
    ).toMatchSnapshot();
  });

  it('Don\'t onSubmit', () => {
    shallow(<AuthForm {...props} />);
    expect(props.onSubmit).toHaveBeenCalledTimes(0);
  });

  it('Call onSubmit', async () => {
    const wrapper = shallow(<AuthForm {...props} />);
    await wrapper.find(Button).first().simulate('press');
    expect(props.onSubmit).toHaveBeenCalledTimes(1);
  });
});
