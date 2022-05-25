import 'babel-polyfill';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { login, logout } from '../../src/redux/actions/loginActions';
import {
  showSuccessSnackbar,
  clearSnackbar,
} from '../../src/redux/actions/snackbarActions';
import {
  LoginTypes, LOGOUT, OPEN_SNACKBAR, CLOSE_SNACKBAR,
} from '../../src/redux/types';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore({});

const API_URL = 'https://elites-barefoot-nomad.herokuapp.com/api/v1/users/login';

describe('loginStore(creds)', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('dispatches LOGIN_FAIL after login', () => {
    mock.onPost(API_URL).reply(200);
    store
      .dispatch(login({ email: 'yang@gmail.com', password: 'password' }))
      .then(() => {
        const expectedActions = [
          { type: LoginTypes.LOGIN_FAIL, payload: 'Incorrect credentials' },
        ];
        expect(store.getActions()).toEqual(expectedActions);
      });
  }, 50000);
});

describe('closeSnackbar() action', () => {
  it('should dispatch the CLOSE_SNACKBAR action', () => {
    store.clearActions();
    store.dispatch(clearSnackbar());
    const expectedAction = [{ type: CLOSE_SNACKBAR }];
    expect(store.getActions()).toEqual(expectedAction);
  });
});

describe('openSnackbar() action', () => {
  it('should dispatch the OPEN_SNACKBAR action', () => {
    store.clearActions();
    store.dispatch(showSuccessSnackbar());
    const expectedAction = [{ type: OPEN_SNACKBAR }];
    expect(store.getActions()).toEqual(expectedAction);
  });
});

describe('logout() action', () => {
  it('should dispatch LOGOUT action', () => {
    store.clearActions();
    store.dispatch(logout());
    const expectedAction = [{ type: LOGOUT }];
    expect(store.getActions()).toEqual(expectedAction);
  });
});
