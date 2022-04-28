import { Typography, Box, Paper, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import notFoundSvg from '../../../assets/svg/notfound.svg';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          '& > :not(style)': {
            m: 1,
            width: '80vw',
            height: '80vh',
          },
        }}
      >
        <Paper
          elevation={3}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={notFoundSvg} alt="not found" style={{ width: '50%' }} />
          <Typography
            variant={{ xs: 'h6', sm: 'body' }}
            mt="1rem"
            sx={{
              fontWeight: {
                xs: '400',
                sm: '500',
              },
            }}
          >
            Oops! The Page you are looking for is not found
          </Typography>
          <Button
            onClick={() => {
              navigate('/home');
            }}
            variant="outlined"
            sx={{ marginTop: '1rem' }}
          >
            Go To Home
          </Button>
        </Paper>
      </Box>
    </div>
  );
};

export default NotFound;
