import * as React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import { makeStyles } from '@mui/styles';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { initialize } from '../../../redux/actions/tripRequestActions';
import LoadingButton from '@mui/lab/LoadingButton';
import Modal from '@mui/material/Modal';
import { loadTripRequests } from '../../../redux/actions/tripRequestsActions';
import { Stack } from '@mui/material';

const closeIcon = {
  position: 'absolute',
  backgroundColor: 'rgba(0,0,0,0.2)',
  top: '10px',
  right: '10px',

  cursor: 'pointer',
  color: 'white',
  '&:hover': {
    backgroundColor: 'red',
  },
};

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const useStyles = makeStyles(() => ({
  root: {
    '&&': {
      '& .MuiStepIcon-completed': { color: '07539F' },
    },
  },
}));

const CreateTripRequest = (props) => {
  const dispatch = useDispatch();
  const tripRequest = useSelector((state) => state.tripRequest);
  const allLocations = useSelector((state) => state.allLocations);
  const classes = useStyles();
  const blueColor = { backgroundColor: '#07539F' };
  const [activeStep, setActiveStep] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [snackText, setSnackText] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [severity, setSeverity] = React.useState('');
  const token = JSON.parse(localStorage.getItem('userToken'))?.accesstoken;
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const tripData = async () => {
    setIsLoading(true);
    const tripInfo = {
      departLocation: tripRequest.stepOne.requests[0].departLocation,
      destinations: tripRequest.stepOne.requests.map((request) => ({
        accomodationId: request.accomodation,
        destinationId: request.destination,
      })),

      tripReason: tripRequest.stepTwo.tripReason,
      rememberMe: tripRequest.stepTwo.rememberMe,
      departDate: tripRequest.stepOne.departDate,
      returnDate: tripRequest.stepOne.returnDate,
    };

    const res = await axios
      .post(
        'https://elites-barefoot-nomad.herokuapp.com/api/v1/trips',
        tripInfo,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setSeverity('success');
        setSnackText(response.data.message);
        setOpen(true);
        setTimeout(() => {
          props.close();
        }, 7000);
        if (response.data.status === 201) {
          dispatch(initialize());
          setActiveStep(0);
          setIsLoading(false);
          dispatch(loadTripRequests());
        }
      })
      .catch((err) => {
        setSeverity('error');
        setIsLoading(false);
        setSnackText(err.response.data.message);
        setOpen(true);
        console.log(err);
      });
    setIsLoading(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  function showStep(activeStep) {
    switch (activeStep) {
      case 0:
        return <StepOne active={activeStep} />;

      case 1:
        return <StepTwo active={activeStep} />;

      case 2:
        return (
          <>
            <Typography
              align="center"
              variant="body1"
              gutterBottom
              sx={{ margin: 3, fontWeight: 600, textAlign: 'center' }}
            >
              TRIP REQUEST FINAL REVIEW
            </Typography>

            <Typography
              variant="body1"
              gutterBottom
              sx={{ margin: 3, textAlign: 'left' }}
            >
              <strong>N.B:</strong> Below is a read only overview of your tip
              request before submission, to change some of the trip details,
              click the previous button
            </Typography>
            <StepOne />
            <StepTwo />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <LoadingButton
                loading={isLoading}
                onClick={async () => {
                  const res = await tripData();
                }}
                variant="contained"
                sx={{
                  width: 110,
                  marginTop: 3,
                  marginBottom: 3,
                  backgroundColor: blueColor,
                  color: 'white,',
                  borderColor: 'white',
                }}
              >
                SUBMIT
              </LoadingButton>
            </div>
          </>
        );
    }
  }

  const nextStep = () => {
    if (activeStep < 3) setActiveStep((currentStep) => currentStep + 1);
  };
  const previousStep = () => {
    if (activeStep >= 0) setActiveStep((currentStep) => currentStep - 1);
  };

  return (
    <Modal
      open={props.open}
      onClose={() => props.close()}
      sx={{
        overflow: 'scroll',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Box
        component="div"
        className="box"
        sx={{
          position: 'relative',
          background: 'white',
          width: '70vw',
          borderRadius: 3,
          marginLeft: '200px',
          marginRight: '200px',
          marginBottom: '100px',
        }}
      >
        <CloseIcon sx={closeIcon} onClick={() => props.close()} />
        <form noValidate autoComplete="off">
          <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            action={action}
            bodystyle={{ backgroundColor: 'white', color: 'black' }}
          >
            <Alert
              onClose={handleClose}
              severity={severity}
              sx={{ width: '100%' }}
            >
              {`${snackText}`}
            </Alert>
          </Snackbar>
          <Typography
            align="center"
            variant="body1"
            gutterBottom
            sx={{ margin: 3, fontSize: 22, fontWeight: 800 }}
          >
            TRIP REQUEST FORM
          </Typography>
          <Stepper activeStep={activeStep} className={classes.root}>
            <Step>
              <StepLabel>First</StepLabel>
            </Step>
            <Step>
              <StepLabel>Second</StepLabel>
            </Step>
            <Step>
              <StepLabel>Third</StepLabel>
            </Step>
          </Stepper>

          {showStep(activeStep)}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 20,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: 20,
              }}
            >
              <Button
                variant="contained"
                onClick={previousStep}
                sx={{
                  width: 110,
                  backgroundColor: blueColor,
                }}
                style={{ display: activeStep < 1 ? 'none' : 'block' }}
              >
                Previous
              </Button>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: 20,
              }}
            >
              <Button
                variant="contained"
                onClick={nextStep}
                sx={{
                  width: 110,
                  backgroundColor: blueColor,
                  marginLeft: 3,
                }}
                style={{ display: activeStep == 2 ? 'none' : 'flex' }}
              >
                Next
              </Button>
            </div>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default CreateTripRequest;
