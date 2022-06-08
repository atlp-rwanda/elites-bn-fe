import axios from 'axios';
import { actionTypes } from '../types';
// import jwt_decode from "jwt-decode";

const API_URL = 'https://elites-barefoot-nomad.herokuapp.com/api/v1/users/';
const UPDATE_ROLE_URL =
  'https://elites-barefoot-nomad.herokuapp.com/api/v1/users/updateRole';
const URL = 'https://elites-barefoot-nomad.herokuapp.com/api/v1/users/roles';
// const token = JSON.parse(localStorage.getItem('userToken'))?.accesstoken;

export const usersAction = (token) =>
  function (dispatch) {
    axios
      .get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        dispatch({
          type: actionTypes.GET_USERS,
          payload: { users: res.data.payload },
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: actionTypes.LOAD_USERS_FAIL,
          payload: 'failed to load users',
        });
      });
  };

// export const userRoles = () => async (dispatch) => {
//   try {
//     const res = await axios.get(URL, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     if (res) {
//       dispatch({
//         type: actionTypes.SET_ROLES,
//         payload: { roles: res.data.payload },
//       });
//     }
//   } catch (err) {
//     console.log(err);
//     dispatch({
//       type: actionTypes.FAILED_TO_LOAD_ROLES,
//       payload: ' failed to load roles',
//     });
//   }
// };

export const userRoles= (token) => function(dispatch){
  axios.get(URL, {
          headers: { Authorization: `Bearer ${token}` },
        }).then((res)=>{
          dispatch({
                    type: actionTypes.SET_ROLES,
                    payload: { roles: res.data.payload },
                  });
        }).catch((err)=>{
          dispatch({
                  type: actionTypes.FAILED_TO_LOAD_ROLES,
                  payload: `failed to load roles`,
                });
        })
}

export const updateRoles = (id, email, token) => async (dispatch) => {
  try {
    const res = await axios.patch(
      `${UPDATE_ROLE_URL}/${id}`,
      { email: email },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(res);
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
