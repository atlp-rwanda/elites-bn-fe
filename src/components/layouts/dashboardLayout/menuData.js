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

export const adminSideBarData = [
  {
    title: 'Dashboard',
    icon: <Dashboard />,
    route: '/dashboard',
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
    title: 'Logout',
    icon: <Logout />,
    route: '/logout',
  },
];

export const userSideBarData = [
  {
    title: 'Dashboard',
    icon: <Dashboard />,
    route: '/dashboard',
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
    title: 'Logout',
    icon: <Logout />,
    route: '/logout',
  },
];

export const travelAdminSidebarData = [
  {
    title: 'Dashboard',
    icon: <Dashboard />,
    route: '/dashboard',
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
    title: 'Users',
    icon: <Group />,
    route: '/users',
  },
  {
    title: 'Logout',
    icon: <Logout />,
    route: '/logout',
  },
];
