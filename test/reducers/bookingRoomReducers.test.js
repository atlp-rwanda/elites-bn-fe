import BookingRoomReducer from '../../src/redux/reducers/bookingRoomReducers';
import {
  bookingRoomsFetchType,
  bookingConfirmationCreateType,
} from '../../src/redux/types';

describe('BookingConfirmationCreateReducer(state, action)', () => {
  const initialState = {
    loading: false,
  };

  const fetchRequestAction = {
    type: bookingRoomsFetchType.BOOKING_ROOMS_FETCH,
    payload: 'payload',
  };

  const fetchFailureAction = {
    type: bookingRoomsFetchType.BOOKING_ROOMS_FETCH_FAILURE,
    payload: 'payload',
  };

  const fetchSuccessAction = {
    type: bookingRoomsFetchType.BOOKING_ROOMS_SUCCESS,
    payload: 'payload',
  };

  const fetchInvalidAction = {
    type: 'INVALID',
  };

  it('should return loading True', () => {
    const reducer = BookingRoomReducer(initialState, fetchRequestAction);
    expect(reducer).toEqual({ loading: true });
  });

  it('should return loading false loading fail', () => {
    const reducer = BookingRoomReducer(initialState, fetchFailureAction);
    expect(reducer).toEqual({ loading: false, error: 'payload' });
  });

  it('should return loading false loading success', () => {
    const reducer = BookingRoomReducer(initialState, fetchSuccessAction);
    expect(reducer).toEqual({ loading: false, data: 'payload' });
  });

  it('should return loading false loading invalid', () => {
    const reducer = BookingRoomReducer(initialState, fetchInvalidAction);
    expect(reducer).toEqual({ loading: false });
  });
});
