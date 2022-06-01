import axios from 'axios';
import { bookingConfirmationSetTripIdType } from '../types';

export const bookingConfirmationSetTripIdAction = (id) => {
  return {
    type: bookingConfirmationSetTripIdType.BOOKING_CONFIRMATION_SET_TRIP_ID,
    id: id,
  };
};
