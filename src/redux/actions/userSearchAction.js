import axios from 'axios';
import { actionTypes } from '../types';

const API_URL = 'https://elites-barefoot-nomad.herokuapp.com/api/v1/trips';

const getUserSearch = (data) => ({
  type: actionTypes.GET_USERSEARCH,
  payload: data,
});
const token = JSON.parse(localStorage.getItem('userToken'))?.accesstoken;

const setUserSearch = () => async (dispatch) => {
  const response = await axios.get(API_URL,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

  dispatch(
    getUserSearch(response.data.payload),
  );
};
export default setUserSearch;
