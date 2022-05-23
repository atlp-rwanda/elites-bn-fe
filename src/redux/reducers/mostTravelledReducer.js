import { actionTypes } from '../types';

const { GET_MOSTVISITEDLOCATION } = actionTypes;

const initialState = {
  mostVisitedLocation: [],
  loading: true,
};

export default function mostTravelledReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOSTVISITEDLOCATION:
      return {
        ...state,
        mostVisitedLocation: action.visitedLocations,
        loading: false,

      };
    default:
      return state;
  }
}
