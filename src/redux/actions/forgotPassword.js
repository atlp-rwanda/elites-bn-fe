import axios from 'axios';
import { LoginTypes } from '../types';
import { openGlobalSnackBar } from './globalSnackBarActions';
import { resetMessage } from './resetMessageActions';

const URL =
  'https://elites-barefoot-nomad.herokuapp.com/api/v1/users/forgot-password';

export const sendResetLink = (email) =>
  function (dispatch) {
    axios
      .post(URL, { email })
      .then((res) => {
        dispatch(
          openGlobalSnackBar({
            message: 'Verifcation link sent to your email',
            severity: 'success',
          })
        );
      dispatch(
        resetMessage({
          message: ' check your email to reset your password please!'
        })
      )
        dispatch({
          type: LoginTypes.RESET_LINK_SUCCESS,
          payload: res.data.payload.token,
        });
      })
      .catch((err) => {
        dispatch(
          openGlobalSnackBar({
            message: err.response.data.message,
            severity: 'error',
          })
        );
      });
  };
