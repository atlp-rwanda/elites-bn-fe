import React, { useState } from 'react';

import Box from '@mui/material/Box';

import { CssBaseline } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { Button, Container, FormControl, Typography } from '@mui/material';
import { ValidatorForm } from 'react-material-ui-form-validator';
import InputAdornment from '@mui/material/InputAdornment';
import useStyles from './resetPasswordStyles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Slide from '@mui/material/Slide';
import { Paper } from '@material-ui/core';
import Avatar from '@mui/material/Avatar';
import DoneIcon from '@mui/icons-material/Done';
import { resetPassword } from '../../redux/actions/resetPasswordActions';
import { connect } from 'react-redux';
import { openGlobalSnackBar } from '../../redux/actions/globalSnackBarActions';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import { resetMessage } from '../../redux/actions/resetMessageActions';


const ResetPassword = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const { message, messageOpen } = props.resetMessages;

  let navigate = useNavigate();

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const { token } = useParams();
  const newT = token.replace(/\|+/gi, '.');
  localStorage.setItem('resetToken',  JSON.stringify(newT) )

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onChangeConfirmPassword = (e) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleClose = () => {
     navigate('/login');
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    await props.resetPassword(password, confirmPassword);

    console.log(messageOpen);
    setIsLoading(false);
  };

  const classes = useStyles();

  if(messageOpen){
    return (
      <div>
        <Dialog
          fullScreen
          open={props.resetMessage}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: '80vw',
            height: '30vh',
            margin: '10% auto'
          },
        }}
      >
        <Paper elevation={3}>
            <Box sx={{bgcolor:'#07539F', color: 'white', padding: '10vh 10vh', 
            display: 'flex' , flexDirection: 'column', height: 'inherit'}}>
            <Typography sx={{color: 'white', fontSize: '20px', fontWeight: 'bold'}}>
                You have reset Password successfully!
            </Typography>
            <Avatar sx={{ bgcolor: 'green', marginTop: '5%' }}>
                < DoneIcon/>
            </Avatar>
            <Button autoFocus  sx={{backgroundColor:'white', marginTop: '5%', '&:hover': {
                        backgroundColor: 'white',
                      },}} onClick={handleClose}>
                Login 
              </Button>
            </Box>
            
            
        </Paper>
      </Box>
        </Dialog>
      </div>
    );
  }else{
    return (
      <>
        <Container fixed>
          <CssBaseline />
          <Box
            sx={{
              bgcolor: '#FFFFFF',
              height: '100vh',
              display: 'flex',
              ['@media (max-width:924px)']: {
                flexDirection: 'row',
                flexWrap: 'wrap',
              },
            }}
          >
            <Box
              className={classes.leftContainer}
              sx={{
                ['@media (max-width:924px)']: {
                  width: '100vw',
                  height: '50vh',
                },
              }}
            ></Box>
            <Box
              className={classes.rightContainer}
              sx={{
                width: '100vw',
                overflow: 'hidden',
              }}
            >
              <Box
                // component="form"
                // noValidate
                // autoComplete="off"
                sx={{
                  // backgroundColor: '#BDF2D5',
                  marginTop: '10vh',
                  height: '50vh',
                  width: '25vw',
                  marginLeft: '25vh',
                  marginTop: '174px',
                  ['@media (max-width:924px)']: {
                    width: '90vw',
                    height: '50vh',
                    paddingTop: 0,
                    margin: 0,
                    overflow: 'hidden',
                    alignItems: 'center',
                  },
                  ['@media (max-width:1200px)']: {
                    width: '60vw',
                    height: '50vh',
                    paddingTop: 0,
                    margin: '30px',
                    overflow: 'hidden',
                    // backgroundColor: 'blue',
                    alignItems: 'center',
                  },
                }}
              >
                <Typography component="h2" variant="h5" className={classes.title}>
                  Reset your Password
                </Typography>
                <ValidatorForm form onSubmit={handleOnSubmit}>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="outlined-adornment-password">
                      New Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={onChangePassword}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            //   onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label=" New Password"
                    />
                  </FormControl>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="outlined-adornment-password">
                      Confirm Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={onChangeConfirmPassword}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <Typography
                      sx={{
                        display: messageOpen ? 'block' : 'none',
                        color: 'red',
                      }}
                    >
                      {message}
                    </Typography>
                  <LoadingButton
                    type="submit"
                    variant="outlined"
                    loading={isLoading}
                    sx={{
                      borderRadius: '20px',
                      textAlign: 'center',
                      width: '158px',
                      height: '39px',
                      margin: '10% 30%',
                      color: '#FFFFFF',
                      '&:hover': {
                        backgroundColor: '#07539F',
                      },
                      backgroundColor: '#07539F',
                      textTransform: 'none',
                      ['@media (max-width:924px)']: {
                        margin: '10% 23%',
                      },
                    }}
                  >
                    Reset Password
                  </LoadingButton>
                </ValidatorForm>
              </Box>
            </Box>
          </Box>
        </Container>
      </>
    );
  }

 
  
};

const mapStatesToProps = (state) => {
  return {
    reset: state.forgotPassword,
    snackBar: state.globalSnackBar,
    resetMessages: state.resetMessage,
  };
};

export default connect(mapStatesToProps, { resetPassword, openGlobalSnackBar, resetMessage })(
  ResetPassword
);
