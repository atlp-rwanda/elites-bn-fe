import 'babel-polyfill';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { bookingConfirmationCreateType } from '../../src/redux/types';
import {
  createBookingConfirmationRequest,
  createBookingConfirmationFailure,
  createBookingConfirmationSuccess,
} from '../../src/redux/actions/bookingConfirmationActions';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore({});

describe('createBookingConfirmationRequest()', () => {
  it('shoul dispatch the BOOKING_CONFIRMATION_CREATE action', () => {
    store.clearActions();
    store.dispatch(createBookingConfirmationRequest());
    let expectedAction = [
      { type: bookingConfirmationCreateType.BOOKING_CONFIRMATION_CREATE },
    ];
    expect(store.getActions()).toEqual(expectedAction);
  });
});

describe('createBookingConfirmationFailure()', () => {
  it('shoul dispatch the BOOKING_CONFIRMATION_CREATE_FAILURE action', () => {
    store.clearActions();
    store.dispatch(createBookingConfirmationFailure());
    let expectedAction = [
      {
        type: bookingConfirmationCreateType.BOOKING_CONFIRMATION_CREATE_FAILURE,
      },
    ];
    expect(store.getActions()).toEqual(expectedAction);
  });
});

describe('createBookingConfirmationSuccess()', () => {
  it('shoul dispatch the createBookingConfirmationSuccess action', () => {
    store.clearActions();
    store.dispatch(createBookingConfirmationSuccess());
    let expectedAction = [
      {
        type: bookingConfirmationCreateType.BOOKING_CONFIRMATION_CREATE_SUCCESS,
      },
    ];
    expect(store.getActions()).toEqual(expectedAction);
  });
});
