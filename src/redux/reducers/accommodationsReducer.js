import { GET_ACCOMMODATIONS } from '../types';

const initialState = {
  accommodations: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ACCOMMODATIONS:
      return {
        ...state,
        accommodations: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
