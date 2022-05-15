import { SET_CURRENT_USER } from '../types';

const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});
export default setCurrentUser;
