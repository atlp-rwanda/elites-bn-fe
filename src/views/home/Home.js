import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import 'animate.css';
import NavBar from './WelcomeNavBar';
import Bottom from './BottomNavBar.js';
import useStyles from './homeStyle';



const Home = () => {
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
)};
export default Home;