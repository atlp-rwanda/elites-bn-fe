import React from 'react';
import { makeStyles } from '@mui/styles';
import { grid } from '@mui/system';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

const useStyles = makeStyles({
  nav: {
    height: '10vh',
    display: grid,
    color: 'white',
    background: 'white',
    align: 'center',
  },
});

const NavBar = ({ forwardRef }) => {
  const classes = useStyles();
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          paddingTop: '20px',
          justifyContent: 'right',
          typography: 'body1',
          '& > :not(style) + :not(style)': {
            ml: 2,
          },
        }}
      >
        <a href="/login"  underline="hover" style={{ align: 'center', color: 'white', textDecoration: 'none' }}>
          Login
        </a>
        <a
          href="/signup"
          ref={forwardRef}
          underline="hover"
          style={{ align: 'center', color: 'white',  textDecoration: 'none' }}
        >
          Register
        </a>
      </Box>
    </Container>
  );
};

export default NavBar;
