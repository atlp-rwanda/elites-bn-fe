import axios from 'axios';
import { bookingConfirmationCreateType } from '../types';
import { fetchRoomsBooking } from './bookingroomActions';
import { openGlobalSnackBar } from './globalSnackBarActions';

export const createBookingConfirmationRequest = () => {
  return {
    type: bookingConfirmationCreateType.BOOKING_CONFIRMATION_CREATE,
  };
};

export const createBookingConfirmationSuccess = (data) => {
  return {
    type: bookingConfirmationCreateType.BOOKING_CONFIRMATION_CREATE_SUCCESS,
    payload: data,
  };
};

export const createBookingConfirmationFailure = (error) => {
  return {
    type: bookingConfirmationCreateType.BOOKING_CONFIRMATION_CREATE_FAILURE,
    payload: error,
  };
};

export const createBookingRoom =
  (roomId, tripId, checkinDate, checkoutDate) => async (dispatch) => {
    await axios
      .post(
        `https://elites-barefoot-nomad.herokuapp.com/api/v1/rooms/${roomId}/booking`,

        {
          tripId,
          checkinDate,
          checkoutDate,
        },
        {
          headers: {
            authorization: `Bearer ${
              JSON.parse(localStorage.getItem('userToken')).accesstoken
            }`,
          },
        }
      )
      .then((res) => {
        dispatch(
          openGlobalSnackBar({
            message: 'Booking successfully!',
            severity: 'success',
          })
        );
        dispatch(fetchRoomsBooking(id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
