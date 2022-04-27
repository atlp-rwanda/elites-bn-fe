/* eslint-disable jsx-quotes */
import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Accommodations from './components/accommodations/accommodations';
import Home from './components/home/Home';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <BrowserRouter>
          <header>
            <Link to='/'>HOME</Link>
            <div>
              <Link to='/accommodations'>ACCOMMODATIONS</Link>
            </div>
          </header>
          <Routes>
            <Route path='/accommodations' element={<Accommodations />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
