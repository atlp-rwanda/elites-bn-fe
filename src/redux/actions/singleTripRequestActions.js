import axios from 'axios';
import { CLEAR_SINGLE_TRIP_REQUEST, SET_SINGLE_TRIP_REQUEST } from '../types';

export const setSingleTripRequest = (tripRequest) => ({
  type: SET_SINGLE_TRIP_REQUEST,
  payload: tripRequest,
});

export const clearSingleTripRequest = () => ({
  type: CLEAR_SINGLE_TRIP_REQUEST,
});

export const loadSingleTripRequest = (id) => {
  const token = JSON.parse(localStorage.getItem('userToken'))?.accesstoken;
  return function (dispatch) {
    axios
      .get(`https://elites-barefoot-nomad.herokuapp.com/api/v1/trips/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(setSingleTripRequest(res.data.payload));
      })
      .catch((err) => console.log(err));
  };
};

export default setSingleTripRequest;
