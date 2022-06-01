import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { connect } from 'react-redux';
import axios from 'axios';

import BookingConfirmationForm from './BookingConfirmationForm';
import { createBookingRoom } from '../../redux/actions/bookingConfirmationActions';

function ConfirmationFormDialog(props) {
  const availability = props.availability;
  const room = props.roomData;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //create
  const [roomId, setRoomId] = useState('');
  const [tripId, setTripId] = useState(2);
  const [checkinDate, setCheckinDate] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');

  useEffect(() => {
    const fetchRoom = async (id) => {
      const result = await axios(
        `HTTPS://elites-barefoot-nomad.herokuapp.com/api/v1/rooms/${id}/booking`
      );
      setRooms(result.data.payload);
    };
    fetchRoom();
  }, []);

  return (
    <div>
      {availability ? (
        <Button
          style={{ textTransform: 'none' }}
          variant="contained"
          onClick={handleClickOpen}
          sx={{ mr: 5 }}
        >
          Book Now
        </Button>
      ) : (
        <Button
          disabled
          style={{ textTransform: 'none' }}
          variant="contained"
          onClick={handleClickOpen}
          sx={{ mr: 5 }}
        >
          Booked
        </Button>
      )}
      <Dialog open={open} onClose={handleClickOpen}>
        <BookingConfirmationForm
          roomData={props.roomData}
          tripid={props.tripid}
        />
        <DialogActions>
          <Button
            style={{ textTransform: 'none' }}
            variant="contained"
            onClick={handleClose}
            color="warning"
            style={{ marginTop: -55 }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createBookingRoom: (id, booking) =>
      dispatch(createBookingRoom(id, booking)),
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    createBookingConfirmationData: state.createBookingConfirmationData,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmationFormDialog);
