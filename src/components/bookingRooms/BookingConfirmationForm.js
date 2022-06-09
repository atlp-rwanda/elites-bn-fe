import React, { useEffect } from 'react';

import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  Button,
  TableRow,
  Paper,
  Typography,
  TextField,
} from '@mui/material';
import { Container } from 'react-grid-system';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useLocation } from 'react-router-dom';

import { fetchRoomsBooking } from '../../redux/actions/bookingroomActions';
import { createBookingRoom } from '../../redux/actions/bookingConfirmationActions';
import setCurrentUser, {
  setCurrentUserProfile,
} from '../../redux/actions/currentUserActions';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

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
  const { t } = useTranslation();

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
              <h2>{'Booking Confirmation Form'}</h2>
            </Typography>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>{t('Booked Room Number')} : </TableCell>
                  <TableCell onChange={handleChange} align="left" id="roomId">
                    {room.roomNumber}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>{t('Names')} : </TableCell>
                  <TableCell align="left">{names}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell id="priceId">{t('Price')} </TableCell>
                  <TableCell align="left">{room.price}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell id="currencyId">{t('Currency')} </TableCell>
                  <TableCell align="left">{room.currency}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell id="roomTypeId">{t('Room Type')} </TableCell>
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
                            inputProps={{ maxLength: 10 }}
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
                            inputProps={{ maxLength: 10 }}
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
        {t('Confirm')}
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
