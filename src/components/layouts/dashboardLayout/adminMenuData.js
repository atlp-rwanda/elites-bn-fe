/* eslint-disable import/prefer-default-export */
import {
  AccountCircle,
  Apartment,
  ConnectingAirports,
  Dashboard,
  Forum,
  Group,
  LocationOn,
  Logout,
} from '@mui/icons-material';
import React from 'react';

export const sideBarData = [
  {
    title: 'Dashboard',
    icon: <Dashboard />,
    route: '/home',
  },
  {
    title: 'Locations',
    icon: <LocationOn />,
    route: '/locations',
  },
  {
    title: 'Accommodations',
    icon: <Apartment />,
    route: '/accommodations',
  },
  {
    title: 'Profile',
    icon: <AccountCircle />,
    route: '/profile/:id',
  },
  {
    title: 'Trip requests',
    icon: <ConnectingAirports />,
    route: '/tripRequests',
  },
  {
    title: 'Users',
    icon: <Group />,
    route: '/users',
  },
  {
    title: 'Chat',
    icon: <Forum />,
    route: '/chat',
  },
  {
    title: 'Logout',
    icon: <Logout />,
    route: '/logout',
  },
];
