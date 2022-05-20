import axios from 'axios';
import {
  REJECT_TRIP_REQUEST,
  APPROVE_TRIP_REQUEST,
  DELETE_TRIP_REQUEST,
  SET_TRIP_REQUESTS,
} from '../types';
import { openGlobalSnackBar } from './globalSnackBarActions';
import { closeLoader } from './loaderActions';

export const setTripRequests = (tripRequests) => ({
  type: SET_TRIP_REQUESTS,
  payload: tripRequests,
});

export const tripDeleted = () => ({
  type: DELETE_TRIP_REQUEST,
});

export const tripApproved = () => ({
  type: APPROVE_TRIP_REQUEST,
});

export const tripRejected = () => ({
  type: REJECT_TRIP_REQUEST,
});

export const loadTripRequests = () => {
  const token = JSON.parse(localStorage.getItem('userToken'))?.accesstoken;
  return function (dispatch) {
    axios
      .get('https://elites-barefoot-nomad.herokuapp.com/api/v1/trips', {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(setTripRequests(res.data.payload));
      })
      .catch((err) => console.log(err));
  };
};

export const deleteTripRequest = (id, token) =>
  function (dispatch) {
    console.log('%cTokennn in Actions==', 'background-color:green', token);
    axios
      .delete(
        `https://elites-barefoot-nomad.herokuapp.com/api/v1/trips/${id}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        dispatch(tripDeleted());
        dispatch(loadTripRequests());
        dispatch(closeLoader());
        dispatch(
          openGlobalSnackBar({
            message: 'Trip request deleted successfully!',
            severity: 'success',
          })
        );
      })
      .catch((err) => console.log(err));
  };

export const approveTripRequest = (id, token) =>
  function (dispatch) {
    axios
      .patch(
        `https://elites-barefoot-nomad.herokuapp.com/api/v1/trips/${id}`,
        { status: 'approved' },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        dispatch(tripApproved());
        dispatch(loadTripRequests());
        dispatch(closeLoader());
        dispatch(
          openGlobalSnackBar({
            message: 'Trip request approved successfully!',
            severity: 'success',
          })
        );
      })
      .catch((err) => console.log(err));
  };

export const rejectTripRequest = (id, token) =>
  function (dispatch) {
    axios
      .patch(
        `https://elites-barefoot-nomad.herokuapp.com/api/v1/trips/${id}`,
        { status: 'rejected' },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        dispatch(tripRejected());
        dispatch(loadTripRequests());
        dispatch(closeLoader());
        dispatch(
          openGlobalSnackBar({
            message: 'Trip request rejected successfully!',
            severity: 'success',
          })
        );
      })
      .catch((err) => console.log(err));
  };

export default setTripRequests;
