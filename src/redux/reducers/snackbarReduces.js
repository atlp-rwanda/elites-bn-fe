import { CLOSE_SNACKBAR, OPEN_SNACKBAR } from '../types';

const SnackBarReducer = (state = {}, action) => {
  switch (action.type) {
    case OPEN_SNACKBAR:
      return {
        ...state,
        SnackbarOpen: true,
        SnackbarMessage: action.message,
        severityMessage: action.severityMessage,
      };
    case CLOSE_SNACKBAR:
      return {
        ...state,
        SnackbarOpen: false,
      };
    default:
      return state;
  }
};

export default SnackBarReducer;
