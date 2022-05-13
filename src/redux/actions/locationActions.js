import { actionTypes }from '../types';
const { GET_LOCATIONS,GET_ACCOMMODATIONS } = actionTypes;
export const getLocations = (locations) => ({
  type: GET_LOCATIONS,
  payload: locations,
});

export const getAccomodations = (accomodations) =>({
type:GET_ACCOMMODATIONS,
payload: accomodations
})
 