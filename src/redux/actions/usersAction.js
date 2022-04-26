import axios from "axios";
import actionTypes from "../types";

const API_URL = 'https://elites-barefoot-nomad.herokuapp.com/api/v1/users/';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6MSwiaWF0IjoxNjUyMjkxODQwLCJleHAiOjE2ODMzOTU4NDB9.iY8XDFthiuk_BoWAzbHye_BTF5SmPSi-ZJBV_HaGkAo';
// const authorization = `Authorization: Bearer ${token}` ;
export const usersAction = () => async (dispatch) => {
    try {
        const response = await axios.get(API_URL,{headers: { "Authorization": `Bearer ${token}`}});
        if(response){
          dispatch({
              type: actionTypes.GET_USERS,
              payload: { users: response.data.payload},
          }); 
        }
    } catch (err) {
        console.log(err);
        dispatch({
            type: actionTypes.LOAD_USERS_FAIL,
            payload: 'failed to load users'
        });
    };
}