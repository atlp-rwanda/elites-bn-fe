import 'babel-polyfill';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  CLEAR_SINGLE_TRIP_REQUEST,
  SET_SINGLE_TRIP_REQUEST,
} from '../../src/redux/types';
import { singleTrip } from '../dummyData';
import setSingleTripRequest, {
  clearSingleTripRequest,
  loadSingleTripRequest,
} from '../../src/redux/actions/singleTripRequestActions';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore({});

const SINGLE_TRIP_URL =
  'https://elites-barefoot-nomad.herokuapp.com/api/v1/trips/61';
beforeEach(() => {
  store.clearActions();
});
describe('SINGLE TRIP REQUEST ACTIONS', () => {
  it('dispatches SET_SINGLE_TRIP-REQUEST', () => {
    mock.onGet(SINGLE_TRIP_URL).reply(200);
    store.dispatch(setSingleTripRequest(singleTrip));
    const expectedActions = [
      { type: SET_SINGLE_TRIP_REQUEST, payload: singleTrip },
    ];
    expect(store.getActions()).toEqual(expectedActions);
  }, 50000);

  it('should dispatch the loadSingleTrip function', () => {
    store.clearActions();
    mock.onGet(SINGLE_TRIP_URL).reply(200);
    store.dispatch(loadSingleTripRequest());
    store.dispatch(setSingleTripRequest(singleTrip));
    const expectedActions = [
      { type: SET_SINGLE_TRIP_REQUEST, payload: singleTrip },
    ];
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('should dispatch the clearSingleTrip function', () => {
    store.clearActions();
    store.dispatch(clearSingleTripRequest());
    const expectedActions = [{ type: CLEAR_SINGLE_TRIP_REQUEST }];
    expect(store.getActions()).toEqual(expectedActions);
  });
});
