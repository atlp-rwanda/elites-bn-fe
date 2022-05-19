import { OPEN_LOADER, CLOSE_LOADER } from '../types';

export const showLoader = () => (dispatch) => {
  dispatch({ type: OPEN_LOADER });
};

export const closeLoader = () => (dispatch) => {
  dispatch({ type: CLOSE_LOADER });
};
