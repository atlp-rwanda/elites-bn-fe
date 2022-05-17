import axios from 'axios';
import {
  REJECT_TRIP_REQUEST,
  APPROVE_TRIP_REQUEST,
  DELETE_TRIP_REQUEST,
  SET_TRIP_REQUESTS,
} from '../types';

const token = JSON.parse(localStorage.getItem('userToken'))?.accesstoken;

const setTripRequests = (tripRequests) => ({
  type: SET_TRIP_REQUESTS,
  payload: tripRequests,
});

const tripDeleted = () => ({
  type: DELETE_TRIP_REQUEST,
});

const tripApproved = () => ({
  type: APPROVE_TRIP_REQUEST,
});

const tripRejected = () => ({
  type: REJECT_TRIP_REQUEST,
});

export const loadTripRequests = () =>
  function (dispatch) {
    axios
      .get('https://elites-barefoot-nomad.herokuapp.com/api/v1/trips', {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(setTripRequests(res.data.payload));
        console.log('%cdispatched', 'background-color:teal', res.data.payload);
      })
      .catch((err) => console.log(err));
  };

export const deleteTripRequest = (id) =>
  function (dispatch) {
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
      })
      .catch((err) => console.log(err));
  };

export const approveTripRequest = (id) =>
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
      })
      .catch((err) => console.log(err));
  };

export const rejectTripRequest = (id) =>
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
      })
      .catch((err) => console.log(err));
  };

export default setTripRequests;
