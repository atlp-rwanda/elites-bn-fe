import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';

import setAccommodations from '../../redux/actions/accommodationsActions';
import Sidebar from '../layouts/dashboardLayout/Sidebar';
import TopBar from '../layouts/dashboardLayout/TopBar';
import { bookingConfirmationSetTripIdAction } from '../../redux/actions/bookingConfirmationSetTripIdAction';

function SingleTrip() {
  const { tripid } = useParams();

  const [trip, setTrip] = useState('');

  const accommodationsState = useSelector((state) => state.allAccommodations);
  const { accommodations, loading } = accommodationsState;
  let tripAccs = [];
  const dispatch = useDispatch();

  const fetchAccommodations = async () => {
    const res = await axios
      .get('https://elites-barefoot-nomad.herokuapp.com/api/v1/accommodations')
      .catch((err) => {
        console.log(err);
      });
    dispatch(setAccommodations(res.data.payload));
  };

  useEffect(() => {
    const fetchTrip = async () => {
      const res = await axios
        .get(
          `https://elites-barefoot-nomad.herokuapp.com/api/v1/trips/${tripid}`,
          {
            headers: {
              authorization: `Bearer ${
                JSON.parse(localStorage.getItem('userToken')).accesstoken
              }`,
            },
          }
        )
        .catch((err) => {
          console.log(err);
        });
      setTrip(res?.data?.payload.destinations);
      await dispatch(bookingConfirmationSetTripIdAction(tripid));
    };
    fetchTrip();
    fetchAccommodations();
  }, []);

  let ids;

  const findAccommodation = (accommodation, ids) => {
    for (let i = 0; i < ids.length; i++) {
      if (accommodation.id === ids[i]) tripAccs.push(accommodation);
    }
  };

  if (trip && !loading) {
    ids = trip.map((destination) => {
      const x = JSON.parse(destination);

      return x.accommodationId;
    });

    accommodations.forEach((accommodation) => {
      findAccommodation(accommodation, ids);
    });
  }

  console.log(
    '%cAccomoodations and loading',
    'background-color:teal',
    loading,
    accommodations,
    ids,
    tripAccs
  );

  return (
    <div>
      <Sidebar />
      <TopBar />
      <br /> <br />
      <div
        style={{
          minHeight: '100vh',
          width: '78vw',
          borderRadius: '10px',
          m: 2,
          background: 'white',
          marginLeft: '20%',
        }}
      >
        {!loading ? (
          <Grid container spacing={2}>
            {tripAccs.map((acc) => {
              return (
                <Grid item xs={12} md={3} key={acc.id}>
                  <Card sx={{ width: '100%' }}>
                    <CardMedia
                      component="img"
                      height="140"
                      title=""
                      image={acc.images[0]}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="body1" component="div">
                        {acc.accommodationName}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        href={`/${tripid}/accommodations/${acc.id}/bookingroom`}
                        size="small"
                        variant="outlined"
                      >
                        BOOK ROOM
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <Typography
            color="primary"
            variant="h5"
            sx={{ position: 'absolute', top: '50vh', left: '50vw' }}
          >
            loading...
          </Typography>
        )}
      </div>
    </div>
  );
}

export default SingleTrip;
