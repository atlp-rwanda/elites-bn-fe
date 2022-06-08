import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';


export default function resetMessage() {
  const dispatch = useDispatch();

  const entireState = useSelector((state) => state);
  const globalSnackBarState = entireState.resetMessage;
  const { message } = globalSnackBarState;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(closeGlobalSnackBar());
  };

  return (
    <Snackbar open={snackBarOpen} autoHideDuration={4000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
