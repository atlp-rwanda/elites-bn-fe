import axios from 'axios';
import { GET_ACCOMMODATIONS, ACCOMMODATIONS_ERROR } from '../types';

const getAccommodations = () => async (dispatch) => {
  try {
    const res = await axios.get(
      'https://elites-barefoot-nomad.herokuapp.com/api/v1/accommodations',
    );
    console.log(res);
    dispatch({
      type: GET_ACCOMMODATIONS,
      payload: res.data.payload,
    });
  } catch (e) {
    dispatch({
      type: ACCOMMODATIONS_ERROR,
      payload: console.log(e),
    });
  }
};
export default getAccommodations;
