import { SET_LOCATIONS } from '../types';

const setLocations = (locations) => ({
  type: SET_LOCATIONS,
  payload: locations,
});
export default setLocations;
