import axios from 'axios';
import { LoginTypes } from '../types';


const URL = 'https://elites-barefoot-nomad.herokuapp.com/api/v1/users/forgot-password';

export const sendResetLink = (email) => async (dispatch) => {
  try {
    const response = await axios.post(URL,{email});
    console.log(response);
    if (response.data.status === 200) {
      dispatch({
        type: LoginTypes.RESET_LINK_SUCCESS,
        payload: { token: response.data.payload },
      });
    }
  } catch (err) {
    dispatch({
      type: LoginTypes.RESET_LINK_FAIL,
      payload: `failed to send reset link ${err}`,
    });
  }
};