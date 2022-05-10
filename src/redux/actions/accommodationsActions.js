import { actionTypes }from '../types';

const { SET_ACCOMMODATIONS } = actionTypes;
const setAccommodations = (accommodations) => ({
  type: SET_ACCOMMODATIONS,
  payload: accommodations,
});
export default setAccommodations;
