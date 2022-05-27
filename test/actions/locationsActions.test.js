import 'babel-polyfill';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import setLocations, {
  loadLocations,
} from '../../src/redux/actions/locationsActions';
import { SET_LOCATIONS } from '../../src/redux/types';
import { allLocations, locationsResponse } from '../dummyData';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore({});

const API_URL = 'https://elites-barefoot-nomad.herokuapp.com/api/v1/locations';

beforeEach(() => {
  store.clearActions();
});
describe('LOCAION ACTIONS', () => {
  it('dispatches SET_LOCATIONS', () => {
    mock.onGet(API_URL).reply(200);
    store.dispatch(setLocations(locationsResponse.rows));
    const expectedActions = [
      { type: SET_LOCATIONS, payload: locationsResponse.rows },
    ];
    expect(store.getActions()).toEqual(expectedActions);
  }, 50000);
  it('should dispatch the loadLocations function', () => {
    store.clearActions();
    mock.onGet(API_URL).reply(200);
    store.dispatch(loadLocations());
    store.dispatch(setLocations(allLocations));
    const expectedActions = [{ type: SET_LOCATIONS, payload: allLocations }];
    expect(store.getActions()).toEqual(expectedActions);
  });
});
