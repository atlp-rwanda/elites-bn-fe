export const showSuccessSnackbar = (message, severityMessage) => {
  return (dispatch) => {
    dispatch({ type: 'OPEN_SNACKBAR', message, severityMessage });
  };
};

export const clearSnackbar = () => {
  return (dispatch) => {
    dispatch({ type: 'CLOSE_SNACKBAR' });
  };
};
