import { OPEN_GLOBAL_SNACKBAR, CLOSE_GLOBAL_SNACKBAR } from '../types';

const initialState = {
  snackBarOpen: false,
  message: '',
  severity: '',
};

const globalSnackBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_GLOBAL_SNACKBAR:
      return {
        ...state,
        snackBarOpen: true,
        message: action.payload.message,
        severity: action.payload.severity,
      };
    case CLOSE_GLOBAL_SNACKBAR:
      return {
        ...state,
        snackBarOpen: false,
        message: '',
        severity: '',
      };
    default:
      return state;
  }
};

export default globalSnackBarReducer;
