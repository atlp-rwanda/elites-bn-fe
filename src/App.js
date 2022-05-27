/* eslint-disable jsx-quotes */
import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NotificationsPanel from './components/notifications/NotificationsPanel';
import ViewTripRequest from './components/notifications/ViewTripRequest';
import GlobalSnackBar from './components/snackbar/GlobalSnackBar';
import history from './history';
import { openGlobalSnackBar } from './redux/actions/globalSnackBarActions';
import Routes from './routes/Routes';

function App() {
  const dispatch = useDispatch();

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      const { status } = error?.response;
      const { path } = error?.response?.data;

      // if (status === 401) {
      //   dispatch(
      //     openGlobalSnackBar({
      //       message: 'Unauthorized error!',
      //       severity: 'error',
      //     })
      //   );
      //   window.location = '/login';
      // }

      if (status === 500) {
        dispatch(
          openGlobalSnackBar({
            message: 'Internal Server error, try again later!',
            severity: 'error',
          })
        );
      }

      if (status === 404) {
        if (
          !(
            path.split('/').includes('notifications') ||
            path.split('/').includes('profiles')
          )
        ) {
          dispatch(
            openGlobalSnackBar({
              message: 'Resource you are looking for is not found!',
              severity: 'error',
            })
          );
        }
      }

      return Promise.reject(error);
    }
  );
  return (
    <BrowserRouter history={history}>
      <ViewTripRequest />
      <GlobalSnackBar />
      <NotificationsPanel />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
