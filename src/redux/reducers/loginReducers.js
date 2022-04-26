import { LoginTypes, LOGOUT } from '../types';

const user = JSON.parse(localStorage.getItem('userToken'));
const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LoginTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
        role: payload.role
      };

    case LoginTypes.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: payload,
      };

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
}
