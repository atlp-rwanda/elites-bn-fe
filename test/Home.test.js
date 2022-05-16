import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Home from '../src/views/home/Home';

describe('Snapshot Test', () => {
  test('Snapshot for Home Component', () => {
    const renderedComponent = renderer.create(<Home />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
import loginReducers from '../../src/redux/reducers/loginReducers';
import { LoginTypes, LOGOUT } from '../../src/redux/types';

describe('loginReducer(state,action)', () => {
  const initialState = {
    isLoggedIn: false,
    user: null,
  };

  it('should return the initial state', () => {
    const reducer = loginReducers(undefined, {});
    expect(reducer).toEqual(initialState);
  });

  it('should return success with true when login is true', () => {
    const action = {
      type: LoginTypes.LOGIN_FAIL,
    };

    const reducer = loginReducers(initialState, action);
    expect(reducer).toEqual({
      ...initialState,
      isLoggedIn: false,
      user: undefined,
    });
  });
});
