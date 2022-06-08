import axios from 'axios';
import { LoginTypes } from '../types';
import { openGlobalSnackBar } from './globalSnackBarActions';
import { resetMessage } from './resetMessageActions';

const token = localStorage.getItem('resetToken');
const URL = `https://elites-barefoot-nomad.herokuapp.com/api/v1/users/reset-password/${token}`;

export const resetPassword = (password, confirmPassword) =>
  function (dispatch) {
    axios
      .patch(URL, { password, confirmPassword })
      .then((res) => {
        console.log(res);
        dispatch(
          resetMessage({
            message: 'done',
          })
        );
        dispatch({
          type: LoginTypes.RESET_PASSWORD_SUCCESS,
          payload: { message: res.data.message },
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
