import axios from 'axios';
import { actionTypes } from '../types';

const API_URL = 'https://elites-barefoot-nomad.herokuapp.com/api/v1/locations/mostTravelled/all';

const getMostTravelledLocationAction = (data) => ({
  type: actionTypes.GET_MOSTVISITEDLOCATION,
  visitedLocations: data,
});
const setMostVisitedLocation = () => async (dispatch) => {
  const response = await axios.get(API_URL);
  dispatch(
    getMostTravelledLocationAction(response.data.visitedLocations),
  );
};
export default setMostVisitedLocation;
