/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../views/home/Home';
import Dashboard from '../components/layouts/dashboardLayout';
import TripRequests from '../components/tripRequests/TripRequests';
import NotFoundPage from '../views/notFound/NotFoundPage';
import ProtectRoute from './protectedRoutes';
import Login from '../views/home/Login';
import Signup from '../components/signup/Signup';
import SignupSuccess from '../components/signup/SignupSuccess';
import SocialAuthGoogleDir from '../views/home/SocialAuthGoogleDir';
import AccommodationList from '../components/accommodation/AccommodationList';
import SuccessLogin from '../views/home/SuccessLogin';
import Roles from '../components/roles/roles';

const AllRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
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
    <Route
      exact
      path="/users"
      element={
        <ProtectRoute redirectTo="/login">
          <Roles />
        </ProtectRoute>
      }
    />
    <Route path="/signup" element={<Signup />} />
    <Route path="/signup/success" element={<SignupSuccess />} />
    <Route
      exact
      path="/accommodations"
      element={
        <ProtectRoute redirectTo="/login">
          <AccommodationList />
        </ProtectRoute>
      }
    />
    <Route
      className="socialtestid"
      path="/google/success/:token"
      element={<SocialAuthGoogleDir />}
    />

    <Route
      exact
      path="/users"
      element={
        <ProtectRoute redirectTo="/login">
          <Roles />
        </ProtectRoute>
      }
    />

    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/login" element={<Login />} />
    <Route
      exact
      path="/success"
      element={
        <ProtectRoute redirectTo="/login">
          <SuccessLogin />
        </ProtectRoute>
      }
    />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AllRoutes;
