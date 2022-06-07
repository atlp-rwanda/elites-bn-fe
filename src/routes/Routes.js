/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../views/home/Home';
import Dashboard from '../components/layouts/dashboardLayout';
import TripStat from '../components/layouts/dashboardLayout/TripStat';
import Dashboardindex from '../components/layouts/dashboardLayout/DashboardIndex'
import TripRequests from '../components/tripRequests/TripRequests';
import NotFoundPage from '../views/notFound/NotFoundPage';
import ProtectRoute from './protectedRoutes';
import Login from '../views/home/Login';
import Signup from '../components/signup/Signup';
import SignupSuccess from '../components/signup/SignupSuccess';
import SocialAuthGoogleDir from '../views/home/SocialAuthGoogleDir';
import Accommodation from '../components/accommodation/Accommodation';
import AccommodationList from '../components/accommodation/AccommodationList';
import AccommodationReview from '../components/accommodation/AccommodationReview';

import SuccessLogin from '../views/home/SuccessLogin';
import Roles from '../components/roles/roles';
import BookingRooms from '../components/bookingRooms/BookingRooms';
import SingleTrip from '../components/bookingRooms/SingleTrip';
import Profile from '../components/profile/profile'

const AllRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route
      path="/dashboard"
      element={
        <ProtectRoute redirectTo="/login">
           {/* <TripStat /> */}
          {/* <Dashboard /> */}
          <Dashboardindex />
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
    <Route path="/signup" element={<Signup />} />
    <Route path="/signup/success" element={<SignupSuccess />} />

    <Route
       exact
       path="/profile"
       element={

        <ProtectRoute redirectTo="/login">
          <Profile /> 
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
      path="/success"
      element={
        <ProtectRoute redirectTo="/login">
          <SuccessLogin />
        </ProtectRoute>
      }
    />
    <Route path="accommodations/review" element={<AccommodationReview />} />
    <Route path="*" element={<NotFoundPage />} />

    <Route
      path="/:tripid/accommodations/:accommodationId/bookingroom/"
      element={
        <ProtectRoute redirectTo="/login">
          <BookingRooms />
        </ProtectRoute>
      }
    />
    <Route
      path="/tripRequests/:tripid"
      element={
        <ProtectRoute redirectTo="/login">
          <SingleTrip />
        </ProtectRoute>
      }
    />

    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AllRoutes;
