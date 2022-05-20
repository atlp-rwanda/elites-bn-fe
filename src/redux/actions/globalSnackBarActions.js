import { OPEN_GLOBAL_SNACKBAR, CLOSE_GLOBAL_SNACKBAR } from '../types';

export const openGlobalSnackBar = (messageAndSeverity) => ({
  type: OPEN_GLOBAL_SNACKBAR,
  payload: messageAndSeverity,
});

export const closeGlobalSnackBar = () => ({
  type: CLOSE_GLOBAL_SNACKBAR,
});
