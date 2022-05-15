import {
  MARK_ALL_AS_READ,
  MARK_ONE_AS_READ,
  SET_NOTIFICATIONS,
} from '../types';

const initialState = {
  notifications: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.payload,
        loading: false,
      };
    case MARK_ALL_AS_READ:
      return {
        ...state,
        loading: false,
      };
    case MARK_ONE_AS_READ:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
