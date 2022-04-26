<<<<<<< HEAD
import { actionTypes }from '../types';
=======
import actionTypes from '../types';
>>>>>>> This is a combination of 16 commits.

const { SET_ACCOMMODATIONS } = actionTypes;
const setAccommodations = (accommodations) => ({
  type: SET_ACCOMMODATIONS,
  payload: accommodations,
});
export default setAccommodations;
