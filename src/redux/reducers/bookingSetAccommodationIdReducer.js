import { bookingSetAccommodationIdType } from '../types';

const initialState = {
  loading: false,
};

const BookingSetAccommodationIdReducer = (state = {}, action) => {
  switch (action.type) {
    case bookingSetAccommodationIdType.BOOKING_SET_ACCOMMODATION_ID:
      return {
        loading: true,
        id: action.id,
      };

    default:
      return state;
  }
};

export default BookingSetAccommodationIdReducer;
