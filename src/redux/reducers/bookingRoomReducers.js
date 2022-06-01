import { bookingRoomsFetchType } from '../types';

const initialState = {
  loading: false,
};

const BookingRoomReducer = (state = {}, action) => {
  switch (action.type) {
    case bookingRoomsFetchType.BOOKING_ROOMS_FETCH:
      return {
        loading: true,
      };

    case bookingRoomsFetchType.BOOKING_ROOMS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };

    case bookingRoomsFetchType.BOOKING_ROOMS_FETCH_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default BookingRoomReducer;
