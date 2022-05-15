import axios from 'axios';
import { SET_LOCATIONS } from '../types';

const setLocations = (locations) => ({
  type: SET_LOCATIONS,
  payload: locations,
});
export default setLocations;

export const loadLocations = () =>
  function (dispatch) {
    axios
      .get('https://elites-barefoot-nomad.herokuapp.com/api/v1/locations')
      .then((res) => {
        dispatch(setLocations(res.data.payload));
      })
      .catch((err) => console.log(err));
  };
