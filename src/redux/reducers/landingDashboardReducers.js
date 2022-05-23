import { actionTypes } from '../types';

const { SET_TRIPSTATISTICS } = actionTypes;

const initialState = {
  tripStatistics: [],
  loading: true,
};

export default function landingDashboardReducers(state = initialState, action) {
  switch (action.type) {
    case SET_TRIPSTATISTICS:
      return {
        ...state,
        tripStatistics: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
