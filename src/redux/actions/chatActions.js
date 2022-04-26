import { ActionTypes } from '@mui/base';
import axios from 'axios';
import { actionTypes } from '../types';


const URL = 'https://elites-barefoot-nomad.herokuapp.com/api/v1/chats';

export const getAllChats = () => async (dispatch) => {
  try {
    const response = await axios.get(URL);
    if (response.data.status === 200) {
      dispatch({
        type: actionTypes.GET_CHATS,
        payload: { chats: response.data.chats },
      });
    }
  } catch (err) {
    dispatch({
      type: actionTypes.FAILED_TO_LOAD_CHATS,
      payload: 'failed to load chats',
    });
  }
};