import axios from 'axios';
import { LoginTypes } from '../types';

const URL =
  'https://elites-barefoot-nomad.herokuapp.com/api/v1/users/reset-password/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTQsImlhdCI6MTY1NDUwNzE0NSwiZXhwIjoxNjU0NTA4OTQ1fQ.uL33uDDVIBgH0hgN7amrGfnjmpJHYoKmH8cdFoE64Jo';

export const resetPassword =
  (password, confirmPassword) => async (dispatch) => {
    try {
      const response = await axios.patch(URL, { password, confirmPassword });
      console.log(response);
      if (response.data.status === 200) {
        dispatch({
          type: LoginTypes.RESET_PASSWORD_SUCCESS,
          payload: { message: response.data.message },
        });
      }
    } catch (err) {
      dispatch({
        type: LoginTypes.RESET_PASSWORD_FAIL,
        payload: {errorMessage: err},
      });
    }
  };
