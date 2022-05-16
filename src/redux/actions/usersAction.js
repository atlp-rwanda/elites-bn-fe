import axios from 'axios';
import { actionTypes } from '../types';
// import jwt_decode from "jwt-decode";

const API_URL = 'https://elites-barefoot-nomad.herokuapp.com/api/v1/users/';
const UPDATE_ROLE_URL = 'https://elites-barefoot-nomad.herokuapp.com/api/v1/users/';
const URL = 'https://elites-barefoot-nomad.herokuapp.com/api/v1/users/roles';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6MSwibmFtZXMiOiJZQU5HRU5FWUUgUGF0cmljayIsImlhdCI6MTY1MjYxNDcyMCwiZXhwIjoxNjgzNzE4NzIwfQ.U88PyYKxXEpS0iEXu7_04K2sH8A-dkb5UOouhYJ2rCw';
// const authorization = `Authorization: Bearer ${token}` ;
export const usersAction = () => async (dispatch) => {
  try {
    const response = await axios.get(API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // const decoded = jwt_decode(token);
    if (response) {
      dispatch({
        type: actionTypes.GET_USERS,
        payload: { users: response.data.payload },
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: actionTypes.LOAD_USERS_FAIL,
      payload: 'failed to load users',
    });
  }
};

export const userRoles = (email) => async (dispatch) => {
  try {
    const res = await axios.get(URL, {
      headers: { Authorization: `Bearer ${token}` },
    }, { email });
    if (res) {
      dispatch({
        type: actionTypes.SET_ROLES,
        payload: { roles: res.data.payload },
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: actionTypes.FAILED_TO_LOAD_ROLES,
      payload: ' failed to load roles',
    });
  }
};

export const updateRoles = () => async (dispatch) => {
  try {
    const res = await axios.patch(UPDATE_ROLE_URL, {
      headers: { Authorization: `Bearer ${token}` },
    }, );
    if (res) {
      dispatch({
        type: actionTypes.UPDATE_ROLE,
        payload: { roles: res.data.payload },
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: actionTypes.FAILED_TO_UPDATE,
      payload: ' failed to update roles',
    });
  }
};


