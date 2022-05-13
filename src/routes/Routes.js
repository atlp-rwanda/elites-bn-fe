import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Accommodations from '../components/accommodations/accommodations';
import Home from '../views/home/Home';
import Dashboard from '../components/layouts/dashboardLayout';
import NotFoundPage from '../views/notFound/NotFoundPage';
import ProtectRoute from './protectedRoutes';
import Login from '../views/home/Login';
import SuccessLogin from '../views/home/SuccessLogin';
import Unauthorized from './unauthorizedRoutes';
import Signup from '../components/signup/Signup';
import SignupSuccess from '../components/signup/SignupSuccess';
import SocialAuthGoogleDir from '../views/home/SocialAuthGoogleDir';

const AllRoutes = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/accommodations' element={<Accommodations />} />
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/login' element={<Login />} />
    <Route
      exact
      path='/success'
      element={
        <ProtectRoute redirectTo='/login'>
          <SuccessLogin />
        </ProtectRoute>
      }
    />
    <Route path='*' element={<NotFoundPage />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/signup/success' element={<SignupSuccess />} />
    <Route
      exact
      path='/success'
      element={
        <ProtectRoute redirectTo='/login'>
          <SuccessLogin />
        </ProtectRoute>
      }
    />
    <Route
      className='socialtestid'
      path='/google/success/:token'
      element={<SocialAuthGoogleDir />}
    />

    <Route path='*' element={<NotFoundPage />} />
  </Routes>
);

export default AllRoutes;
