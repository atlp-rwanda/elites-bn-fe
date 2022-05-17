import {
  APPROVE_TRIP_REQUEST,
  DELETE_TRIP_REQUEST,
  REJECT_TRIP_REQUEST,
  SET_TRIP_REQUESTS,
} from '../types';

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
    case DELETE_TRIP_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case APPROVE_TRIP_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case REJECT_TRIP_REQUEST:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
