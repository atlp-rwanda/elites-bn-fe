/* eslint-disable max-len */
import axios from 'axios';
import { actionTypes } from '../types';

const API_URL =
  'https://elites-barefoot-nomad.herokuapp.com/api/v1/trips/tripstats';

const getTripStatAction = (data) => ({
  type: actionTypes.SET_TRIPSTATISTICS,
  payload: data,
});

const setTripStatics = (startDate, endDate,token) => async (dispatch) => {
  const response = await axios.post(
    API_URL,
    {
      startDate,
      endDate,
    },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  response && dispatch(getTripStatAction(response.data?.payload?.rows));
  
};
export default setTripStatics;
