/* eslint-disable jsx-quotes */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import history from './history';
import Routes from './routes/Routes';

function App() {
  return (
    <BrowserRouter history={history}>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
