/* eslint-disable jsx-quotes */
import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import GlobalSnackBar from './components/snackbar/GlobalSnackBar';
import history from './history';
import { openGlobalSnackBar } from './redux/actions/globalSnackBarActions';
import Routes from './routes/Routes';

function App() {
  const dispatch = useDispatch();

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      const { status } = error.response;
      if (status === 401) {
        window.location = '/login';
      }
      if (status === 500) {
        dispatch(
          openGlobalSnackBar({
            message: 'Internal Server error!',
            severity: 'error',
          })
        );
      }
      if (status === 404) {
        dispatch(
          openGlobalSnackBar({
            message: 'Resource you are looking for is not found!',
            severity: 'error',
          })
        );
      }

      return Promise.reject(error);
    }
  );
  return (
    <BrowserRouter history={history}>
      <GlobalSnackBar />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
