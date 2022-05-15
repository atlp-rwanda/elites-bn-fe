import { SET_TRIP_REQUESTS } from '../types';

const setTripRequests = (tripRequests) => ({
  type: SET_TRIP_REQUESTS,
  payload: tripRequests,
});
export default setTripRequests;
