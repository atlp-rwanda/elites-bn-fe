import React from 'react';
import { useParams } from 'react-router';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/material';

const SocialAuthGoogleDir = () => {
  const { token } = useParams();
  const newToken = token.replace(/\|+/gi, '.');
  const userToken = { accesstoken: newToken };
  localStorage.setItem('userToken', JSON.stringify(userToken));

  return (
    <>
      <Container className="getByTestId">
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="success">
            {' '}
            Your are Successfully to login with Barefoot Nomad using google
            account.
          </Alert>
        </Stack>
      </Container>
    </>
  );
};

export default SocialAuthGoogleDir;
