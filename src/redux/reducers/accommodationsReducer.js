<<<<<<< HEAD
import { actionTypes } from '../types';
=======
import actionTypes from '../types';
>>>>>>> This is a combination of 16 commits.

const { SET_ACCOMMODATIONS } = actionTypes;

const initialState = {
  accommodations: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ACCOMMODATIONS:
      return {
        ...state,
        accommodations: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
