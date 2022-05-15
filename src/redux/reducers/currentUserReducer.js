import { SET_CURRENT_USER } from '../types';

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
    default:
      return state;
  }
}
