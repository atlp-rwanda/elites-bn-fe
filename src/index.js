/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */

import React from 'react';
import ReactDOM from 'react-dom';
import createRoot from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import store from './redux/store';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
module.hot.accept();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
