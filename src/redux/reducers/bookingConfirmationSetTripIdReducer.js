import { bookingConfirmationSetTripIdType } from '../types';

const initialState = {
  loading: false,
};

const bookingConfirmationSetTripIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case bookingConfirmationSetTripIdType.BOOKING_CONFIRMATION_SET_TRIP_ID:
      return {
        loading: true,
        id: action.id,
      };

    default:
      return state;
  }
};

export default bookingConfirmationSetTripIdReducer;
