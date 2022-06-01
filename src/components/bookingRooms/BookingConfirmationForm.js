import React, { useState, Fragment, useEffect } from 'react';
import MomentUtils from '@date-io/moment';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Button,
  TableRow,
  Paper,
  Stack,
  Typography,
  TextField,
  FormControl,
  FormHelperText,
  MenuItem,
  InputLabel,
  Select,
  gutterBottom,
} from '@mui/material';
import dayjs from 'dayjs';
import Box from '@mui/material/Box';
import { Container } from 'react-grid-system';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';
import { DesktopDateRangePicker } from '@mui/x-date-pickers-pro/DesktopDateRangePicker';
import { MobileDateRangePicker } from '@mui/x-date-pickers-pro/MobileDateRangePicker';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { DateRange } from '@mui/icons-material';
import DialogActions from '@mui/material/DialogActions';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { ValidatorComponent } from 'react-material-ui-form-validator';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useLocation } from 'react-router-dom';
import { KeyboardDatePicker } from '@material-ui/pickers';

import { fetchRoomsBooking } from '../../redux/actions/bookingroomActions';
import { createBookingRoom } from '../../redux/actions/bookingConfirmationActions';
import createBookingConfirmationRequest from '../../redux/actions/bookingConfirmationActions';
import setCurrentUser, {
  setCurrentUserProfile,
} from '../../redux/actions/currentUserActions';

function BookingConfirmationForm(props) {
  const dispatch = useDispatch();

  const room = props.roomData;

  const [roomId, setRoomId] = React.useState(room.id);
  const [tripId, setTripId] = React.useState('');

  const [dateCheckIn, setcheckInDate] = React.useState('');
  const [dateCheckOut, setcheckOutDate] = React.useState('');

  // const [trips, setTrips] = React.useState([]);
  //profile information
  const currentUserState = useSelector((state) => state.currentUser);
  const { currentUser } = currentUserState;
  const { currentUserProfile } = currentUserState;
  const bookingSetAccommodationIdReducer = useSelector(
    (state) => state.bookingSetAccommodationIdReducer
  );
  const { pathname } = useLocation();

  const getCurrentUserProfile = async (id, token) => {
    console.log('%cTokenInGetProfile====', 'background-color:green', token);
    const res = await axios
      .get(
        `https://elites-barefoot-nomad.herokuapp.com/api/v1/profiles/${id}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .catch((err) => {
        console.log(err);
      });
    dispatch(setCurrentUserProfile(res.data.payload));
  };

  const getCurrentUser = () => {
    const token = JSON.parse(localStorage.getItem('userToken'))?.accesstoken;
    let currentUserInfo;
    if (token) {
      const decoded = jwtDecode(token);
      let roleName;

      currentUserInfo = {
        id: decoded.id,
        names: decoded.names,
        roleName,
        roleId: decoded.role,
        token,
      };
      dispatch(setCurrentUser(currentUserInfo));
      getCurrentUserProfile(decoded.id, token);
    }
  };

  useEffect(() => {
    setTripId(props.tripid);
    getCurrentUser();
  }, []);

  const handleChange = (event) => {
    if (event.target.id === 'roomId') {
      setRoomId(event.target.value);
    }

    if (event.target.id === 'checkOutDate') {
      setcheckOutDate(event.target.value);
    }
    if (event.target.id === 'checkInDate') {
      setcheckInDate(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    console.log(roomId);
    console.log(tripId);
    console.log(dateCheckIn);
    console.log(dateCheckOut);

    await event.preventDefault();
    await dispatch(
      createBookingRoom(roomId, tripId, dateCheckIn, dateCheckOut)
    );

    await props.fetchRoomsBooking(bookingSetAccommodationIdReducer.id);
  };

  const handleClose = () => setShow(false);
  const { names, roleName } = currentUser;

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ top: 57 }}>
        <Container>
          <TableContainer component={Paper}>
            <Typography color="primary">
              <h2>Booking Confirmation Form</h2>
            </Typography>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Booked Room Number : </TableCell>
                  <TableCell onChange={handleChange} align="left" id="roomId">
                    {room.roomNumber}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Names : </TableCell>
                  <TableCell align="left">{names}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell id="priceId">Price </TableCell>
                  <TableCell align="left">{room.price}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell id="currencyId">Currency </TableCell>
                  <TableCell align="left">{room.currency}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell id="roomTypeId">Room Type </TableCell>
                  <TableCell align="left">{room.roomType}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={6}>
                    <TableCell>
                      <Grid item spacing={3}>
                        <Grid>
                          {' '}
                          <TextField
                            gutterBottom
                            size="small"
                            id="checkInDate"
                            label="dateCheckIn"
                            onChange={handleChange}
                            placeholder="yyyy-mm-dd"
                            format="yyyy-mm-dd"
                            required
                            minDate={new Date()}
                          />
                        </Grid>
                        <Typography
                          variant="h3"
                          style={{ marginBottom: '2px' }}
                        ></Typography>

                        <Grid>
                          <TextField
                            size="small"
                            id="checkOutDate"
                            label="dateCheckOut"
                            onChange={handleChange}
                            placeholder="yyyy-mm-dd"
                            required
                            minDate={new Date()}
                          />
                        </Grid>
                      </Grid>
                    </TableCell>
                  </TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </Container>
      </div>
      <Button
        style={{ textTransform: 'none' }}
        variant="contained"
        type="submit"
        style={{ marginRight: 20 }}
      >
        Confirm
      </Button>
    </form>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    bookingRoomsData: state.allRooms,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchRoomsBooking: (id) => dispatch(fetchRoomsBooking(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingConfirmationForm);
