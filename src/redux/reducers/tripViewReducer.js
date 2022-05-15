import { CLOSE_VIEW_TRIP, OPEN_VIEW_TRIP } from '../types';

const initialState = {
  tripViewOpen: false,
};

const tripViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_VIEW_TRIP:
      return {
        ...state,
        tripViewOpen: true,
      };
    case CLOSE_VIEW_TRIP:
      return {
        ...state,
        tripViewOpen: false,
      };
    default:
      return state;
  }
};

export default tripViewReducer;
