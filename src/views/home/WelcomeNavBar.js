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

const NavBar = () => {
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
        <Link href="/login" underline="hover" style={{ align: 'center', color: 'white' }}>
          {'Login'}
        </Link>
        <Link
          href="#"
          underline="hover"
          style={{ align: 'center', color: 'white' }}
        >
          {'Register'}
        </Link>
      </Box>
    </Container>
  );
};

export default NavBar;
