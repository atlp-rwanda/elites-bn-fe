import React from 'react';
import { useParams } from 'react-router';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/material';

const SocialAuthGoogleDir = () => {
  const { token } = useParams();
  const newToken = token.replace(/\|+/gi, '.');
  const userToken = localStorage.setItem('userToken', newToken);

  return (
    <>
      <Container className='getByTestId'>
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity='success'>
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
