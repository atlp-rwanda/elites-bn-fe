import axios from 'axios';
import { LoginTypes, LOGOUT } from '../types';
import jwt_decode from 'jwt-decode';

const API_URL =
  'https://elites-barefoot-nomad.herokuapp.com/api/v1/users/login';
export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post(API_URL, {
      email,
      password,
    });
    const token = response.data.payload;
    const decoded = jwt_decode(token.accesstoken);
    if (token) {
      localStorage.setItem('userToken', JSON.stringify(token));
      localStorage.setItem('roleId', JSON.stringify(decoded.role));
      dispatch({
        type: LoginTypes.LOGIN_SUCCESS,
        payload: { token: token, role: decoded.role },
      });
    }
  } catch (err) {
    dispatch({
      type: LoginTypes.LOGIN_FAIL,
      payload: 'Incorrect credentials',
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('userToken');
  localStorage.removeItem('roleId');
  dispatch({
    type: LOGOUT,
  });
};
