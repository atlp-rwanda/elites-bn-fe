import React, { useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { updateTripRequest } from '../../../redux/actions/tripRequestActions';
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
import { loadTripRequests } from '../../../redux/actions/tripRequestsActions'

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

export const UpdateTripRequest = (props) => {
  const dispatch = useDispatch();
  const tripRequest = useSelector((state) => state.tripRequest);
  const allLocations = useSelector((state) => state.allLocations);
  const classes = useStyles();
  const blueColor = { backgroundColor: '#07539F' };
  const [activeStep, setActiveStep] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [snackText, setSnackText] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [severity, setSeverity] = React.useState('success');
  const token = JSON.parse(localStorage.getItem('userToken'))?.accesstoken;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const fetchTrip = (id) => {
    return axios
      .get(`https://elites-barefoot-nomad.herokuapp.com/api/v1/trips/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response)
        dispatch(
          updateTripRequest({
            stepOne: {
              requests: response.data.payload.destinations.map(
                (trip, index, arr) => {
                  const parsedTrip = JSON.parse(trip);
                  return {
                    destination: parsedTrip.destinationId,
                    accomodation: parsedTrip.accomodationId,
                    departLocation:
                      index - 1 < 0
                        ? response.data.payload.departLocation
                        : JSON.parse(arr[index - 1]).destinationId,
                  };
                }
              ),
              departDate: new Date(response.data.payload.departDate)
                .toISOString()
                .split('T')[0],
              returnDate: new Date(response.data.payload.returnDate)
                .toISOString()
                .split('T')[0],
            },
            stepTwo: {
              tripReason: response.data.payload.tripReason,
              rememberMe: response.data.payload.rememberMe ? 'true' : 'false',
            },
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchTrip(props.id);
  }, [props.id]);

  const updatedTripData = async () => {
    setIsLoading(true);
    const updatedTripInfo = {
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
      .put(
        `https://elites-barefoot-nomad.herokuapp.com/api/v1/trips/${props.id}`,
        updatedTripInfo,
        {
          headers: {
            Authorization:`Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setSeverity('success');
        setSnackText(response.data.message);
        setOpen(true);
        if (response.status === 200) {
          dispatch(initialize());
          setActiveStep(0);
          setIsLoading(false);
          setTimeout(() => {
            props.close()
          }, 7000);
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
              variant="body1"
              gutterBottom
              align =  'center'
              sx={{
                margin: 3,
                fontWeight: 600,
                width: '100%',
              }}
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
                  const res = await updatedTripData();
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
                EDIT
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
      onClose={()=>props.close()}
      sx={{
        overflow: 'scroll',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding:'20px',
        width: '100vw',
        height:'100vh'

      }}
    >
      <Box sx={{ 
        position: 'relative',
        background: 'white',
        width: 950,
        borderRadius: 3,
        marginTop: '50px',
        marginLeft:'200px'
        }}>
        <CloseIcon sx={closeIcon} onClick={()=> props.close()} />
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
            align ='center'
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
          <div style={{ display: 'flex', justifyContent: 'center' }}>
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
                  marginLeft: 3,
                  width: 110,
                  backgroundColor: blueColor,
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

// export default UpdateTripRequest;
