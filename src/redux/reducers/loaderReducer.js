import { CLOSE_LOADER, OPEN_LOADER } from '../types';

const initialState = {
  loaderOpen: false,
};

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_LOADER:
      return {
        ...state,
        loaderOpen: true,
      };
    case CLOSE_LOADER:
      return {
        ...state,
        loaderOpen: false,
      };
    default:
      return state;
  }
};

export default loaderReducer;
