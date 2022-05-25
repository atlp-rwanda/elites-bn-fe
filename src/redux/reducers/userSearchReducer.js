import { actionTypes } from '../types';

const { GET_USERSEARCH } = actionTypes;

const initialState = {
  globalUserSearch: [],
  loading: true,
};

export default function globalUserSearchReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERSEARCH:
      return {
        ...state,
        globalUserSearch: action.payload,
        loading: false,

      };
    default:
      return state;
  }
}
