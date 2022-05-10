import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { grid } from '@mui/system';
import EmailIcon from '@mui/icons-material/Email';

const useStyles = makeStyles({
  bottom: {
    height: '30vh',
    display: 'flex',
    padding: '20px',
    justifyContent: 'space-between',
  },

  social: {
    color: 'white',
    display: grid,
  },

  email: {
    display: 'flex',
    flexDirection: 'row',
    color: 'white'
  }
});
const BottomNav = () => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.bottom}>
        <div className={classes.social}>
            <Typography variant='h5'> 
            Find us on
            </Typography>
          <FacebookIcon />
          <LinkedInIcon />
          <TwitterIcon />
        </div>
        <div className={classes.email}>
          <EmailIcon
            style={{ height: '20%', width:'20%' }}
          />
          <div>
            <Typography variant="h5">Support</Typography>

            <Typography variant="h6">elites@gmail.com</Typography>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BottomNav;
