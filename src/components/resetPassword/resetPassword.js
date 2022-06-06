import React, { useState } from 'react';

import Box from '@mui/material/Box';

import { CssBaseline } from '@mui/material';

import { Button, Container, FormControl, Typography } from '@mui/material';
import { ValidatorForm } from 'react-material-ui-form-validator';
import InputAdornment from '@mui/material/InputAdornment';
import useStyles from './resetPasswordStyles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { resetPassword } from '../../redux/actions/resetPasswordActions';
import { connect } from 'react-redux';
import { openGlobalSnackBar } from '../../redux/actions/globalSnackBarActions';

const ResetPassword = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      await props.openGlobalSnackBar({
        message: 'Password does not match',
        severity: 'error',
      });
    } else {
      await props.resetPassword(password, confirmPassword);
    }
  };

  const classes = useStyles();
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
                <Button
                  type="submit"
                  variant="outlined"
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
                </Button>
              </ValidatorForm>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

const mapStatesToProps = (state) => {
  return {
    reset: state.forgotPassword,
    snackBar: state.globalSnackBar,
  };
};

export default connect(mapStatesToProps, { resetPassword, openGlobalSnackBar })(
  ResetPassword
);
