import { CLEAR_SINGLE_TRIP_REQUEST, SET_SINGLE_TRIP_REQUEST } from '../types';

const initialState = {
  tripRequest: '',
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_TRIP_REQUEST:
      return {
        ...state,
        tripRequest: action.payload,
        loading: false,
      };
    case CLEAR_SINGLE_TRIP_REQUEST:
      return initialState;
    default:
      return state;
  }
}
