/* eslint-disable jsx-quotes */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import GlobalSnackBar from './components/snackbar/GlobalSnackBar';
import history from './history';
import Routes from './routes/Routes';

function App() {
  return (
    <BrowserRouter history={history}>
      <GlobalSnackBar />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
