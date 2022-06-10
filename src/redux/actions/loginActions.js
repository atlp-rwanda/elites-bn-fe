import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { LoginTypes, LOGOUT } from '../types';
import { openGlobalSnackBar } from './globalSnackBarActions';
const API_URL =
  'https://elites-barefoot-nomad.herokuapp.com/api/v1/users/login';

export const login = (email, password) =>
  function (dispatch) {
    axios
      .post(API_URL, { email, password })
      .then((res) => {
        const token = res.data.payload;
        const decoded = jwtDecode(token.accesstoken);
        localStorage.setItem('userToken', JSON.stringify(token));
        localStorage.setItem('roleId', JSON.stringify(decoded.role));
        dispatch({
          type: LoginTypes.LOGIN_SUCCESS,
          payload: { token, role: decoded.role },
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch(
          openGlobalSnackBar({
            message: 'Incorrect username or password',
            severity: 'error',
          })
        );
      });
  };

export const logout = () => (dispatch) => {
  localStorage.removeItem('userToken');
  localStorage.removeItem('roleId');
  dispatch({
    type: LOGOUT,
  });
};
