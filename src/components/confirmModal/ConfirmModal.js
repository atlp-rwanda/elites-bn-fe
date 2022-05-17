import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import {
  approveTripRequest,
  deleteTripRequest,
  rejectTripRequest,
} from '../../redux/actions/tripRequestsActions';

const ConfirmModal = (props) => {
  const dispatch = useDispatch();
  const { showModal, close, modalData } = props;
  const { message, id, action } = modalData;

  const handleAction = () => {
    if (action === 'delete') {
      dispatch(deleteTripRequest(id));
      close();
    }
    if (action === 'approve') {
      dispatch(approveTripRequest(id));
      console.log('%cIdddd=', 'background-color:teal', id);
      close();
    }
    if (action === 'reject') {
      dispatch(rejectTripRequest(id));
      close();
    }
  };
  return (
    <Dialog
      open={showModal}
      onClose={close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{ marginLeft: '10vw' }}
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={close}>No</Button>
        <Button onClick={handleAction} autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmModal;
