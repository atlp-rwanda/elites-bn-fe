import React, { useEffect, useState } from 'react';
import {
  Card,
  Grid,
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  Box,
} from '@mui/material';
import { Link } from '@mui/material';
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { color } from '@mui/system';
import { connect } from 'react-redux';
import { Carousel } from 'react-carousel-minimal';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './bookingRoom.scss';
import { useParams } from 'react-router';

import setAccommodations from '../../redux/actions/accommodationsActions';
import { fetchRoomsBooking } from '../../redux/actions/bookingroomActions';
import FormDialog from './DialogBox';
import { bookingSetAccommodationId } from '../../redux/actions/bookingSetAccommodationIdAction';

const BookingRoomDisplay = (props) => {
  const { accommodationId, tripid } = useParams();

  const [acc, setAcc] = useState(null);

  //refleshment

  const accommodationState = useSelector((state) => state.allAccommodations);
  const { accommodations } = accommodationState;

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAccommodations = async () => {
      dispatch(bookingSetAccommodationId(accommodationId));
      const resAccommodations = await axios
        .get(
          `https://elites-barefoot-nomad.herokuapp.com/api/v1/accommodations/${accommodationId}`
        )
        .catch((err) => {
          console.log(err);
        });
      setAcc(resAccommodations.data.payload);
    };

    const fetchAll = async () => {
      await props.fetchRoomsBooking(accommodationId);
    };

    fetchAll();
    fetchAccommodations();
  }, []);

  const accommodation = accommodations.filter(
    (item) => item.id === parseInt(accommodationId)
  );

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  };

  return (
    <div>
      <Container
        sx={{
          width: '78vw',

          '&:hover': {
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        {acc ? (
          <div>
            <div style={{ textAlign: 'center' }}>
              <div>
                <Carousel
                  data={acc.images.map((item) => {
                    return {
                      image: item,
                      caption: acc.accommodationName,
                    };
                  })}
                  time={4000}
                  width="100%"
                  captionStyle={captionStyle}
                  radius="10px"
                  slideNumber={true}
                  slideNumberStyle={slideNumberStyle}
                  captionPosition="bottom"
                  automatic={true}
                  dots={true}
                  pauseIconColor="white"
                  pauseIconSize="40px"
                  slideBackgroundColor="darkgrey"
                  slideImageFit="cover"
                  thumbnails={true}
                  thumbnailWidth="100px"
                  showNavBtn={true}
                />
              </div>
            </div>
          </div>
        ) : (
          'Image Loading......'
        )}
      </Container>
      <Container
        sx={{
          height: 600,
        }}
      >
        {props.bookingRoomsData.hasOwnProperty('data') ? (
          <div>
            <Box sx={{ width: '100%' }}>
              <Grid
                sx={{ width: '100%' }}
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {props.bookingRoomsData.data.payload.map((room) => {
                  return (
                    <Grid item xs={12} md={4} key={room.id}>
                      <Typography
                        variant="body2"
                        color="Black"
                        sx={{ fontWeight: 600 }}
                      >
                        Room Number: {room.roomNumber}
                      </Typography>
                      <Card sx={{ maxWidth: 350 }}>
                        <CardActionArea>
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h9"
                              component="div"
                              sx={{ fontWeight: 600 }}
                            >
                              Room Type:{room.roomType}
                              <Typography
                                variant
                                style={{ textTransform: 'none' }}
                                size="small"
                                sx={{ ml: 3 }}
                                className={
                                  room.isAvailable
                                    ? 'available'
                                    : 'not-available'
                                }
                              >
                                {room.isAvailable
                                  ? 'Available'
                                  : 'Not Available'}
                              </Typography>
                            </Typography>

                            <Typography
                              variant="body2"
                              color="#00000"
                              sx={{ fontWeight: 900 }}
                            >
                              Price : {room.price} {room.currency}
                              <FormDialog
                                availability={room.isAvailable}
                                roomData={room}
                                tripid={tripid}
                              />
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </div>
        ) : (
          'Room Loading......'
        )}
      </Container>
    </div>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(BookingRoomDisplay);
