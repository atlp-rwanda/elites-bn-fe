import 'babel-polyfill';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import setLocations from '../../src/redux/actions/locationsActions';
import { SET_LOCATIONS } from '../../src/redux/types';
import { locationsResponse } from '../dummyData';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore({});

const API_URL = 'https://elites-barefoot-nomad.herokuapp.com/api/v1/locations';

beforeEach(() => {
  store.clearActions();
});
describe('locationStore(creds)', () => {
  it('dispatches SET_LOCATIONS', () => {
    mock.onGet(API_URL).reply(200);
    store.dispatch(setLocations(locationsResponse.rows));
    const expectedActions = [
      { type: SET_LOCATIONS, payload: locationsResponse.rows },
    ];
    expect(store.getActions()).toEqual(expectedActions);
  }, 50000);
});

// describe('closeSnackbar() action', () => {
//   it('should dispatch the CLOSE_SNACKBAR action', () => {
//     store.clearActions();
//     store.dispatch(clearSnackbar());
//     let expectedAction = [{ type: CLOSE_SNACKBAR }];
//     expect(store.getActions()).toEqual(expectedAction);
//   });
// });

// describe('openSnackbar() action', () => {
//   it('should dispatch the OPEN_SNACKBAR action', () => {
//     store.clearActions();
//     store.dispatch(showSuccessSnackbar());
//     let expectedAction = [{ type: OPEN_SNACKBAR }];
//     expect(store.getActions()).toEqual(expectedAction);
//   });
// });

// describe('logout() action', () => {
//   it('should dispatch LOGOUT action', () => {
//     store.clearActions();
//     store.dispatch(logout());
//     let expectedAction = [{ type: LOGOUT }];
//     expect(store.getActions()).toEqual(expectedAction);
//   });
// });
