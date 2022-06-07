import React from 'react';
import { useParams } from 'react-router';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/material';
import Dashboard from '../../components/layouts/dashboardLayout'
const SocialAuthGoogleDir = () => {
  const { token } = useParams();
  const newToken = token.replace(/\|+/gi, '.');
  const userToken = { accesstoken: newToken };
  localStorage.setItem('userToken', JSON.stringify(userToken));

  return (
    <Dashboard/>
  );
};

export default SocialAuthGoogleDir;
