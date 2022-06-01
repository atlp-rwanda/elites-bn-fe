import axios from 'axios';
import { bookingRoomsFetchType } from '../types';

export const fetchBookingRooms = () => {
  return {
    type: bookingRoomsFetchType.BOOKING_ROOMS_FETCH,
  };
};

export const fetchBookingRoomsSuccess = (data) => {
  return {
    type: bookingRoomsFetchType.BOOKING_ROOMS_SUCCESS,
    payload: data,
  };
};

export const fetchBookingRoomsFailure = (error) => {
  return {
    type: bookingRoomsFetchType.BOOKING_ROOMS_FETCH_FAILURE,
    payload: error,
  };
};

export const fetchRoomsBooking = (id) => {
  const API_URL = `https://elites-barefoot-nomad.herokuapp.com/api/v1/accommodations/${id}/rooms`;
  return (dispatch) => {
    dispatch(fetchBookingRooms());
    axios
      .get(API_URL)
      .then((response) => {
        dispatch(fetchBookingRoomsSuccess(response.data));
        console.log(response);
      })
      .catch((error) => {
        dispatch(fetchBookingRoomsFailure(error));
      });
  };
};
