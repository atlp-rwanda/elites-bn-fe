/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import {
  Button,
  Container,
  FormControl,
  Paper,
  Typography,
  Snackbar,
} from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import Link from '@mui/material/Link';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import Alert from '@mui/material/Alert';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/loginActions';
import useStyles from './loginStyle';
import {
  showSuccessSnackbar,
  clearSnackbar,
} from '../../redux/actions/snackbarActions';
import Loader from './loader';

const LoginComponent = (props) => {
  const token = JSON.parse(localStorage.getItem('userToken'));
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    await props.login(email, password);

    if (!token) {
      await props.showSuccessSnackbar('incorrect email or password', 'error');
      setLoading(false);
    }
  };

  const handleClose = () => {
    props.clearSnackbar();
  };

  useEffect(() => {
    if (token) {
      const funct = async () => {
        await props.showSuccessSnackbar('Successfully login', 'success');
      };
      funct();

      return navigate('/success');
    }
  });

  const classes = useStyles();
  return (
    <div className={classes.loginPage}>
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          paddingTop: '50% auto',
        }}
        style={{ paddingTop: '20% auto' }}
      >
        <Loader open={loading} />
        <Container className={classes.formContainer}>
          <Paper className="paper-login">
            <Typography component="h1" variant="h5" className={classes.title}>
              Sign In to Your Account
            </Typography>
            <div className={classes.social}>
              <GoogleIcon className={classes.googleIcon} />
              <FacebookRoundedIcon />
            </div>
            <br />
            <Typography className={classes.social}>
              Or use your email account
            </Typography>
            <ValidatorForm form onSubmit={handleLogin}>
              <FormControl margin="normal" required fullWidth>
                <TextValidator
                  label="email"
                  name="Email"
                  variant="filled"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                  value={email}
                  onChange={onChangeEmail}
                  style={{ backgroundColor: '#F4F8F5', width: '300px' }}
                  validators={['required', 'isEmail']}
                  errorMessages={[
                    'This field is required',
                    'email is not valid',
                  ]}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <TextValidator
                  label="Password"
                  name="password"
                  type="password"
                  variant="filled"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                  value={password}
                  onChange={onChangePassword}
                  validators={['required']}
                  style={{ backgroundColor: '#F4F8F5', width: '300px' }}
                  errorMessages={['Password is required.']}
                />
              </FormControl>
              <Link
                href="#"
                underline="none"
                style={{ color: '#07539F', marginBottom: '20px' }}
              >
                Forgot Password?
              </Link>
              <br />
              <Button
                variant="contained"
                type="submit"
                style={{
                  borderRadius: '20px',
                  textAlign: 'center',
                  margin: '10px',
                  width: '200px',
                  backgroundColor: '#07539F',
                }}
              >
                Sign In
              </Button>
            </ValidatorForm>
          </Paper>
        </Container>
      </Box>

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        open={props.SnackBar.SnackbarOpen}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={props.SnackBar.severityMessage}
          sx={{ width: '100%' }}
        >
          {props.SnackBar.SnackbarMessage}
        </Alert>
      </Snackbar>

      <Box
        sx={{
          width: '40vw',
          height: '100vh',
          backgroundColor: '#07539F',
          '@media (max-width:924px)': {
            display: 'none',
          },
        }}
      >
        <div className={classes.rightSideDiv}>
          <div className={classes.backgroundDiv} />
          <Typography variant="h4" gutterBottom className={classes.rightBanner}>
            Hello Friend!
          </Typography>
          <div className={classes.rightBannerParagraph}>
            <Typography paragraph>
              Enter your personal details and start your journey with us
            </Typography>
          </div>

          <Button
            variant="outlined"
            style={{
              borderRadius: '20px',
              textAlign: 'center',
              width: '137px',
              margin: '10px',
              borderColor: 'white',
              color: '#FFFFFF',
              outlineColor: '#FFFFFF',
            }}
          >
            Sign Up
          </Button>
        </div>
      </Box>
    </div>
  );
};

const mapStateToProps = (state) => ({
  login: state.login,
  SnackBar: state.SnackBar,
});

export default connect(mapStateToProps, {
  login,
  showSuccessSnackbar,
  clearSnackbar,
})(LoginComponent);
