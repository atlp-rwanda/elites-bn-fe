import { bookingConfirmationCreateType } from '../types';

const initialState = {
  loading: false,
};

const BookingConfirmationCreateReducer = (state = initialState, action) => {
  switch (action.type) {
    case bookingConfirmationCreateType.BOOKING_CONFIRMATION_CREATE:
      return {
        loading: true,
      };

    case bookingConfirmationCreateType.BOOKING_CONFIRMATION_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };

    case bookingConfirmationCreateType.BOOKING_CONFIRMATION_FETCH_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default BookingConfirmationCreateReducer;
