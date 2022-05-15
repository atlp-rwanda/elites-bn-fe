import { SET_TRIP_REQUESTS } from '../types';

const initialState = {
  tripRequests: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_TRIP_REQUESTS:
      return {
        ...state,
        tripRequests: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
