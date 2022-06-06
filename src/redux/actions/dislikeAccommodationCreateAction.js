import axios from 'axios';
import { dislikeAccommodationCreateType } from '../types';
import {
  closeGlobalSnackBar,
  openGlobalSnackBar,
} from './globalSnackBarActions';

export const dislikeCreateAccommodationRequest = () => {
  return {
    type: dislikeAccommodationCreateType.DISLIKE_ACCOMMODATION_CREATE_REQUEST,
  };
};

export const dislikeCreateAccommodationSuccess = (data) => {
  return {
    type: dislikeAccommodationCreateType.DISLIKE_ACCOMMODATION_CREATE_SUCCESS,
    payload: data,
  };
};

export const dislikeCreateAccommodationFailure = (error) => {
  return {
    type: dislikeAccommodationCreateType.DISLIKE_ACCOMMODATION_CREATE_FAILURE,
    payload: error,
  };
};

export const dislikeCreateAccommodation = (accommodationId, dislikes) => {
  const API_URL = `https://elites-barefoot-nomad.herokuapp.com/api/v1/accommodations/${accommodationId}/dislike`;
  return async (dispatch) => {
    dispatch(dislikeCreateAccommodationRequest());
    await axios
      .post(API_URL, dislikes, {
        headers: {
          authorization: `Bearer ${
            JSON.parse(localStorage.getItem('userToken')).accesstoken
          }`,
        },
      })
      .then((response) => {
        dispatch(
          openGlobalSnackBar({
            message: 'Dislike has Successfully.',
            severity: 'success',
          })
        );
        dispatch(dislikeCreateAccommodationSuccess(response.data));
      })
      .catch((error) => {
        dispatch(
          openGlobalSnackBar({
            message: 'Dislike has failed',
            severity: 'error',
          })
        );
        dispatch(dislikeCreateAccommodationFailure(error));
      });
  };
};
