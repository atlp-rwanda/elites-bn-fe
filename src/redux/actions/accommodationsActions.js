import { SET_ACCOMMODATIONS } from '../types';

const setAccommodations = (accommodations) => ({
  type: SET_ACCOMMODATIONS,
  payload: accommodations,
});
export default setAccommodations;
