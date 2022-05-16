/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Accommodations from '../components/accommodations/accommodations';
import Home from '../views/home/Home';
import Dashboard from '../components/layouts/dashboardLayout';
import TripRequests from '../components/tripRequests/TripRequests';
import NotFoundPage from '../views/notFound/NotFoundPage';
import ProtectRoute from './protectedRoutes';
import Login from '../views/home/Login';
import Signup from '../components/signup/Signup';
import SignupSuccess from '../components/signup/SignupSuccess';
import SocialAuthGoogleDir from '../views/home/SocialAuthGoogleDir';
import Accommodation from '../components/accommodation/Accommodation';
import AccommodationList from '../components/accommodation/AccommodationList';
import ProtectedTravelAdminRoutes from './protectedTravelAdminRoutes';

const AllRoutes = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    {/* <Route path='/accommodations' element={<AccommodationList />} /> */}
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/login' element={<Login />} />
    <Route
      path="/dashboard"
      element={
        <ProtectRoute redirectTo="/login">
          <Dashboard />
        </ProtectRoute>
      }
    />
    <Route
      path="/tripRequests"
      element={
        <ProtectRoute redirectTo="/login">
          <TripRequests />
        </ProtectRoute>
      }
    />
    <Route path="/signup" element={<Signup />} />
    <Route path="/signup/success" element={<SignupSuccess />} />
    <Route
      exact
      path='/accommodations'
      element={
        <ProtectedTravelAdminRoutes redirectTo='/login'>
          <AccommodationList />
        </ProtectedTravelAdminRoutes>
      }
    />
    <Route
      className="socialtestid"
      path="/google/success/:token"
      element={<SocialAuthGoogleDir />}
    />

    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AllRoutes;
