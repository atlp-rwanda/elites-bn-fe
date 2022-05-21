import { SET_CURRENT_USER, SET_CURRENT_USER_PROFILE } from '../types';

const initialState = {
  currentUser: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
      };
    case SET_CURRENT_USER_PROFILE:
      return {
        ...state,
        currentUserProfile: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
