import { SET_LOCATIONS } from '../types';

const initialState = {
  locations: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LOCATIONS:
      return {
        ...state,
        locations: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
