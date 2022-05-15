import axios from 'axios';
import {
  SET_NOTIFICATIONS,
  MARK_ALL_AS_READ,
  MARK_ONE_AS_READ,
} from '../types';

export const setNotifications = (notifications) => ({
  type: SET_NOTIFICATIONS,
  payload: notifications,
});

export const markedAllAsRead = () => ({
  type: MARK_ALL_AS_READ,
});
export const markedOneAsRead = () => ({
  type: MARK_ONE_AS_READ,
});

export const loadNotifications = () => {
  const token = JSON.parse(localStorage.getItem('userToken'))?.accesstoken;
  return function (dispatch) {
    axios
      .get('https://elites-barefoot-nomad.herokuapp.com/api/v1/notifications', {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(setNotifications(res.data.payload));
      })
      .catch((err) => console.log(err));
  };
};

export const markOneAsRead = (id, token) =>
  function (dispatch) {
    axios
      .patch(
        `https://elites-barefoot-nomad.herokuapp.com/api/v1/notifications/markoneasread/${id}`,
        {},
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        dispatch(markedOneAsRead());
        dispatch(loadNotifications());
      })
      .catch((err) => console.log(err));
  };
export const markAllAsRead = (token) =>
  function (dispatch) {
    axios
      .patch(
        'https://elites-barefoot-nomad.herokuapp.com/api/v1/notifications/markallasread',
        {},
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        dispatch(markedAllAsRead());
        dispatch(loadNotifications());
      })
      .catch((err) => console.log(err));
  };

export default setNotifications;
