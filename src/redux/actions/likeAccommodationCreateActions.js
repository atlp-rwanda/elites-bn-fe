import axios from 'axios';
import { likeAccommodationCreateType } from '../types';
import {
  closeGlobalSnackBar,
  openGlobalSnackBar,
} from './globalSnackBarActions';

export const likeCreateAccommodationRequest = () => {
  return {
    type: likeAccommodationCreateType.LIKE_ACCOMMODATION_CREATE_REQUEST,
  };
};

export const likeCreateAccommodationSuccess = (data) => {
  return {
    type: likeAccommodationCreateType.LIKE_ACCOMMODATION_CREATE_SUCCESS,
    payload: data,
  };
};

export const likeCreateAccommodationFailure = (error) => {
  return {
    type: likeAccommodationCreateType.LIKE_ACCOMMODATION_CREATE_FAILURE,
    payload: error,
  };
};

export const likeCreateAccommodation = (accommodationId, likes) => {
  const API_URL = `https://elites-barefoot-nomad.herokuapp.com/api/v1/accommodations/${accommodationId}/like`;
  return async (dispatch) => {
    dispatch(likeCreateAccommodationRequest());
    await axios
      .post(API_URL, likes, {
        headers: {
          authorization: `Bearer ${
            JSON.parse(localStorage.getItem('userToken')).accesstoken
          }`,
        },
      })
      .then((response) => {
        console.log(response);
        dispatch(
          openGlobalSnackBar({
            message: 'Accommodation like successfull',
            severity: 'success',
          })
        );
        dispatch(likeCreateAccommodationSuccess(response.data));
      })
      .catch((error) => {
        dispatch(
          openGlobalSnackBar({ message: 'Like has failed', severity: 'error' })
        );
        dispatch(likeCreateAccommodationFailure(error));
      });
  };
};
