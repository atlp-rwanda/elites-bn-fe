import 'babel-polyfill';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { bookingRoomsFetchType } from '../../src/redux/types';
import {
  fetchBookingRooms,
  fetchBookingRoomsSuccess,
  fetchBookingRoomsFailure,
} from '../../src/redux/actions/bookingroomActions';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore({});

describe('createBookingConfirmationRequest()', () => {
  it('shoul dispatch ALL BOOKING_ROOMS_FETCH action', () => {
    store.clearActions();
    store.dispatch(fetchBookingRooms());
    let expectedAction = [{ type: bookingRoomsFetchType.BOOKING_ROOMS_FETCH }];
    expect(store.getActions()).toEqual(expectedAction);
  });
});

describe('fetchBookingRoomsSuccess()', () => {
  it('shoul dispatch the ACCOMMODATION_FETCH_SUCCESS action', () => {
    store.clearActions();
    store.dispatch(fetchBookingRoomsSuccess());
    let expectedAction = [
      { type: bookingRoomsFetchType.BOOKING_ROOMS_SUCCESS },
    ];
    expect(store.getActions()).toEqual(expectedAction);
  });
});

describe('fetchBookingRoomsFailure()', () => {
  it('shoul dispatch the BOOKING_CONFIRMATION_CREATE_FAILURE action', () => {
    store.clearActions();
    store.dispatch(fetchBookingRoomsFailure());
    let expectedAction = [
      { type: bookingRoomsFetchType.BOOKING_ROOMS_FETCH_FAILURE },
    ];
    expect(store.getActions()).toEqual(expectedAction);
  });
});
