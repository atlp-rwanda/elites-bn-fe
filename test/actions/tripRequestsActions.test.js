import 'babel-polyfill';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import setTripRequests, {
  loadTripRequests,
  approveTripRequest,
  rejectTripRequest,
  deleteTripRequest,
  tripDeleted,
  tripApproved,
  tripRejected,
} from '../../src/redux/actions/tripRequestsActions';
import {
  SET_TRIP_REQUESTS,
  DELETE_TRIP_REQUEST,
  APPROVE_TRIP_REQUEST,
  REJECT_TRIP_REQUEST,
  CLOSE_LOADER,
  OPEN_LOADER,
} from '../../src/redux/types';
import { allTripRequests } from '../dummyData';
import { closeLoader, showLoader } from '../../src/redux/actions/loaderActions';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore({});

const API_URL = 'https://elites-barefoot-nomad.herokuapp.com/api/v1/trips';
const SINGLE_TRIP_URL =
  'https://elites-barefoot-nomad.herokuapp.com/api/v1/trips/61';
beforeEach(() => {
  store.clearActions();
});
describe('tripRequestsStore(creds)', () => {
  it('dispatches SET_TRIP-REQUESTS', () => {
    mock.onGet(API_URL).reply(200);
    store.dispatch(setTripRequests(allTripRequests));
    const expectedActions = [
      { type: SET_TRIP_REQUESTS, payload: allTripRequests },
    ];
    expect(store.getActions()).toEqual(expectedActions);
  }, 50000);

  it('dispatches DELETE_TRIP_REQUEST', () => {
    mock.onDelete(SINGLE_TRIP_URL).reply(200);
    store.dispatch(tripDeleted());
    const expectedActions = [{ type: DELETE_TRIP_REQUEST }];
    expect(store.getActions()).toEqual(expectedActions);
  }, 50000);

  it('dispatches APPROVE_TRIP_REQUEST', () => {
    mock.onPatch(SINGLE_TRIP_URL).reply(200);
    store.dispatch(tripApproved());
    const expectedActions = [{ type: APPROVE_TRIP_REQUEST }];
    expect(store.getActions()).toEqual(expectedActions);
  }, 50000);

  it('dispatches REJECT_TRIP_REQUEST', () => {
    mock.onPatch(SINGLE_TRIP_URL).reply(200);
    store.dispatch(tripRejected());
    const expectedActions = [{ type: REJECT_TRIP_REQUEST }];
    expect(store.getActions()).toEqual(expectedActions);
  }, 50000);

  it('should dispatch the loadTripRequests function', () => {
    store.clearActions();
    mock.onGet(API_URL).reply(200);
    store.dispatch(loadTripRequests());
    store.dispatch(setTripRequests(allTripRequests));
    const expectedActions = [
      { type: SET_TRIP_REQUESTS, payload: allTripRequests },
    ];
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches rejectTripRequest function', () => {
    mock.onPatch(SINGLE_TRIP_URL).reply(200);
    store.dispatch(rejectTripRequest(61, 'token'));
    const expectedActions = [];
    expect(store.getActions()).toEqual(expectedActions);
  }, 50000);
  it('dispatches approveTripRequest function', () => {
    mock.onPatch(SINGLE_TRIP_URL).reply(200);
    store.dispatch(approveTripRequest(61, 'token'));
    const expectedActions = [];
    expect(store.getActions()).toEqual(expectedActions);
  }, 50000);
  it('dispatches deleteTripRequest function', () => {
    mock.onPatch(SINGLE_TRIP_URL).reply(200);
    store.dispatch(deleteTripRequest(61, 'token'));
    const expectedActions = [];
    expect(store.getActions()).toEqual(expectedActions);
  }, 50000);
});

describe('Loader actions', () => {
  it('should dispatch the OPEN_LOADER action', () => {
    store.clearActions();
    store.dispatch(showLoader());
    const expectedAction = [{ type: OPEN_LOADER }];
    expect(store.getActions()).toEqual(expectedAction);
  });
  it('should dispatch the CLOSE_LOADER action', () => {
    store.clearActions();
    store.dispatch(closeLoader());
    const expectedAction = [{ type: CLOSE_LOADER }];
    expect(store.getActions()).toEqual(expectedAction);
  });
});
