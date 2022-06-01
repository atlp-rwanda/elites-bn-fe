import axios from 'axios';
import { bookingSetAccommodationIdType } from '../types';

export const bookingSetAccommodationId = (id) => {
  return {
    type: bookingSetAccommodationIdType.BOOKING_SET_ACCOMMODATION_ID,
    id: id,
  };
};
