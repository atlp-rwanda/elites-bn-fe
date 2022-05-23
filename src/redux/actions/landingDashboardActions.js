/* eslint-disable max-len */
import axios from 'axios';
import { actionTypes } from '../types';

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6MSwibmFtZXMiOiJZQU5HRU5FWUUgUGF0cmljayIsImlhdCI6MTY1Mjk2NzY3OCwiZXhwIjoxLAJt2xUzG26yg1h8hkQ';
// user
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsInJvbGUiOjUsIm5hbWVzIjoiYm9zY28iLCJpYXQiOjE2NTI5ODMxNzQsImV4cCI6MTY4NDA4NzE3NH0.-7aCwtzka6hE-y9jVWRJFfsmijx8XvQZCYt_bvOeHWg';
// Admin
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6MSwibmFtZXMiOiJZQU5HRU5FWUUgUGF0cmljayIsImlhdCI6MTY1Mjk4MzQ4NiwiZXhwIjoxNjg0MDg3NDg2fQ.Dlu5a7WjQTbTbHO2MTzjRjW13lIZc6wy6P_VOuG_S18';
// Manager
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mywicm9sZSI6MywibmFtZXMiOiJIb25vcmUgSXJhZHVrdW5kYSIsImlhdCI6MTY1Mjk4NzAyOSwiZXhwIjoxNjg0MDkxMDI5fQ.A9pBH-iFwIEDWUdx7_9A7VuiG1nSUZpt34E_L7t3if0';
const API_URL = 'https://elites-barefoot-nomad.herokuapp.com/api/v1/trips/tripstats';

const getTripStatAction = (data) => ({
  type: actionTypes.SET_TRIPSTATISTICS,
  payload: data,
});

const setTripStatics = () => async (dispatch) => {
  const response = await axios.post(API_URL, {
    startDate: '1990-10-10',
    endDate: '2990-10-10',
  },
  {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  dispatch(
    getTripStatAction(response.data.payload.rows),
  );
};
export default setTripStatics;
