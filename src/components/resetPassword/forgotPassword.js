import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { CssBaseline } from '@mui/material';
import { Container, FormControl, Typography } from '@mui/material';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import useStyles from './resetPasswordStyles';
import LoadingButton from '@mui/lab/LoadingButton';
import { connect } from 'react-redux';
import { sendResetLink } from '../../redux/actions/forgotPassword';
import { openGlobalSnackBar } from '../../redux/actions/globalSnackBarActions';

const ForgotPassword = (props) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { message, messageOpen } = props.resetMessage;
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    await props.sendResetLink(email);
    setIsLoading(false);
    setEmail('');
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
          <Box className={classes.rightContainer}>
            <Box
              sx={{
                // backgroundColor: '#BDF2D5',
                marginTop: '10vh',
                height: '50vh',
                width: '25vw',
                marginTop: '174px',
                ['@media (max-width:1200px)']: {
                  width: '100vw',
                  height: '50vh',
                  paddingTop: 0,
                  margin: 0,
                  overflow: 'hidden',
                  paddingLeft: '15vw',
                  alignItems: 'center',
                },
              }}
            >
              <Typography component="h2" variant="h5" className={classes.title}>
                Forgot your password ?
              </Typography>
              <ValidatorForm form onSubmit={handleSubmit}>
                <FormControl margin="normal" required fullWidth>
                  <TextValidator
                    label="Enter your email"
                    name="email"
                    variant="outlined"
                    value={email}
                    onChange={onChangeEmail}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          sx={{ color: '#07539F' }}
                        >
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      backgroundColor: '#F4F8F5',
                      width: '300px',
                      outlineColor: '#07539F',
                      borderRadius: '5px',
                    }}
                    validators={['required', 'isEmail']}
                    errorMessages={[
                      'This field is required',
                      'email is not valid',
                    ]}
                  />
                  <Typography
                    sx={{
                      display: messageOpen ? 'block' : 'none',
                      color: 'green',
                    }}
                  >
                    {message}
                  </Typography>

                  <LoadingButton
                    loadingIndicator
                    variant="contained"
                    type="submit"
                    loading={isLoading}
                    sx={{
                      borderRadius: '20px',
                      textAlign: 'center',
                      width: '158px',
                      height: '39px',
                      margin: '10% 20%',
                      color: '#FFFFFF',
                      '&:hover': {
                        backgroundColor: '#07539F',
                      },
                      backgroundColor: '#07539F',
                      textTransform: 'none',
                      ['@media (max-width:1200px)']: {
                        marginLeft: '6vw',
                      },
                    }}
                  >
                    Send reset link
                  </LoadingButton>
                </FormControl>
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
    resetMessage: state.resetMessage,
  };
};

export default connect(mapStatesToProps, {
  sendResetLink,
  openGlobalSnackBar,
})(ForgotPassword);
