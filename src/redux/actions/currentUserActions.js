import { SET_CURRENT_USER, SET_CURRENT_USER_PROFILE } from '../types';

const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const setCurrentUserProfile = (profile) => ({
  type: SET_CURRENT_USER_PROFILE,
  payload: profile,
});
export default setCurrentUser;
