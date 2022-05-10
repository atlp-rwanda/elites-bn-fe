import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { easings } from 'react-animation';
import 'animate.css';
import NavBar from './WelcomeNavBar';
import background from '../../Assets/Images/background.jpg';
import Bottom from './BottomNavBar.js';

const useStyles = makeStyles({
  home: {
    backgroundImage:`url(${background})`,
    height: '100vh',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
  },

  centerDiv: {
    textAlign: 'center',
    margin: 'auto',
    padding: '20vh',
  },

  animate: {
    animation: `bounce-in-up  ${easings.easeOutCubic} 1000ms forwards`,
  },
});


const HomeComponent = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.home}>
        <NavBar/>
      <Container className={classes.centerDiv}>
        <Typography 
        variant="h2" 
        gutterBottom
        className="animate__animated animate__bounceInRight"
        style={{ color:'white'}}
        >
          Welcome to Barefoot Nomad
        </Typography>

        <Typography
          variant="h3"
          gutterBottom
          className="animate__animated animate__bounceInLeft"
          style={{ color:'#D5ECD1'}}
        >
          Travel without Boundaries
        </Typography>
        <hr className="animate__animated animate__bounceInRight" style={{color:'black'}}/>
      </Container>
      <Bottom />
    </div>
  );
};

export default HomeComponent;
