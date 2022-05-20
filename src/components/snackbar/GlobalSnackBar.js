import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { closeGlobalSnackBar } from '../../redux/actions/globalSnackBarActions';

const Alert = React.forwardRef((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

export default function GlobalSnackBar() {
  const dispatch = useDispatch();

  const entireState = useSelector((state) => state);
  const globalSnackBarState = entireState.globalSnackBar;
  const { snackBarOpen, message, severity } = globalSnackBarState;

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
