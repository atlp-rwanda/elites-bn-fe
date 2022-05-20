import 'babel-polyfill';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  usersAction,
  userRoles,
  updateRoles,
} from '../../src/redux/actions/usersAction';
import {
  showSuccessSnackbar,
  clearSnackbar,
} from '../../src/redux/actions/snackbarActions';
import { actionTypes } from '../../src/redux/types';
import { OPEN_SNACKBAR, CLOSE_SNACKBAR } from '../../src/redux/types';
import { ActionTypes } from '@mui/base';
import { cleanup } from '@testing-library/react';
const middleware = [thunk];
const mockStore = configureStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore({});

const API_URL = 'https://elites-barefoot-nomad.herokuapp.com/api/v1/users/';
const UPDATE_ROLE_URL =
  'https://elites-barefoot-nomad.herokuapp.com/api/v1/users/updateRole';
const URL = 'https://elites-barefoot-nomad.herokuapp.com/api/v1/users/roles';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6MSwibmFtZXMiOiJZQU5HRU5FWUUgUGF0cmljayIsImlhdCI6MTY1MjYxNDcyMCwiZXhwIjoxNjgzNzE4NzIwfQ.U88PyYKxXEpS0iEXu7_04K2sH8A-dkb5UOouhYJ2rCw';

describe('usersStore()', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('dispatches LOAD_USERS_FAIL', () => {
    mock.onGet(API_URL).reply(200);
    store.dispatch(usersAction()).then(() => {
      let expectedActions = [
        { type: actionTypes.LOAD_USERS_FAIL, payload: 'failed to load users' },
      ];
      expect(store.getActions()).toEqual(expectedActions);
    });
  }, 50000);
});

describe('usersStore()', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('dispatches FAILED_TO_LOAD_ROLES', () => {
    mock.onGet(URL).reply(200);
    store.dispatch(userRoles()).then(() => {
      let expectedActions = [
        {
          type: actionTypes.FAILED_TO_LOAD_ROLES,
          payload: ' failed to load roles',
        },
      ];
      expect(store.getActions()).toEqual(expectedActions);
    });
  }, 50000);
});

describe('usersStore()', () => {
  beforeEach(() => {
    store.clearActions();
  });


  it('dispatches FAILED_TO_UPDATE', () => {
    mock.onPatch(UPDATE_ROLE_URL,{
        headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6MSwibmFtZXMiOiJZQU5HRU5FWUUgUGF0cmljayIsImlhdCI6MTY1MjYxNDcyMCwiZXhwIjoxNjgzNzE4NzIwfQ.U88PyYKxXEpS0iEXu7_04K2sH8A-dkb5UOouhYJ2rCw`},
      }).reply(404);
    store.dispatch(updateRoles(3,'sendefour@gmail.com')).then(() => {
      let expectedActions = [
        {
          type: actionTypes.FAILED_TO_UPDATE,
          payload: ' failed to update roles',
        },
      ];
      expect(store.getActions()).toEqual(expectedActions);
    });
  }, 50000);
});
