import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ButtonGroup, Skeleton, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import '../tripRequests/requestsTable.scss';
import { closeViewTrip } from '../../redux/actions/tripViewAction';

const classes = {
  modal: {
    position: 'absolute',
    top: '50%',
    left: { xs: '50%', sm: '55%' },
    transform: 'translate(-50%, -50%)',
    width: { xs: '75vw', sm: 600 },
    height: '88vh',
    bgcolor: 'background.paper',
    border: '2px solid rgb(7, 90, 245)',
    // borderRadius: '5px',
    boxShadow: 24,
    // p: { xs: 1, sm: 4 },
  },
  userInfo: {
    backgroundColor: '#79B5D7',
    height: '5rem',
    marginTop: '1rem',
    display: 'flex',
    position: 'relative',
    userImg: {
      width: '4rem',
      height: '4rem',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '2px solid white',
      marginRight: '20px',
      boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    },
  },
  leftTitle: {
    fontWeight: { xs: '300', sm: '600' },
    fontSize: { xs: '0.8rem', sm: '1.2rem' },
    color: '#04157D',
    marginBottom: '0.8rem',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    backgroundColor: '#e5eaff',
    padding: '0 3px',
  },
  RightValues: {
    fontSize: { xs: '0.8rem', sm: '1.2rem' },
    marginBottom: '0.8rem',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
  },
  closeIcon: {
    position: 'absolute',
    backgroundColor: 'rgba(255,0,0,0.2)',
    top: 0,
    right: 0,
    cursor: 'pointer',
    color: 'white',
    '&:hover': {
      backgroundColor: 'red',
    },
  },
  arrowIcon: {
    fontSize: '18px',
    color: '#79B5D7',
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
  },
};

export default function ViewTripRequestSkeleton() {
  const entireState = useSelector((state) => state);
  const singleTripState = entireState.singleTrip;
  const { tripRequest, loading } = singleTripState;
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeViewTrip());
  };

  if (!loading && !tripRequest) {
    dispatch(closeViewTrip);
  }
  return (
    <Box sx={classes.modal}>
      <Box
        sx={{
          backgroundColor: '#07539F',
          maxWidth: '100%',
          height: '8%',
          color: 'white',
          padding: '0.5rem 1rem',
        }}
      >
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ width: 'fit-content' }}
        >
          Trip Request Details
        </Typography>
      </Box>

      <CloseIcon sx={classes.closeIcon} onClick={handleClose} />
      <Box sx={{ padding: '1px 1rem' }}>
        <Box sx={classes.userInfo}>
          <Box
            width="5rem"
            height="5rem"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: '0.5rem',
            }}
          >
            <Skeleton variant="circular" width="4rem" height="4rem" />
          </Box>
          <Box flex={1} display="flex" alignItems="center">
            <Stack direction="row" spacing={2}>
              <Box sx={{ color: '#07539F' }}>
                <Typography>Names:</Typography>
                <Typography>Address:</Typography>
                <Typography>Passport:</Typography>
              </Box>
              <Box sx={{ color: 'white' }}>
                <Typography>
                  <Skeleton variant="text" animation="wave" width="8rem" />
                </Typography>
                <Typography>
                  <Skeleton variant="text" animation="wave" />
                </Typography>
                <Typography>
                  <Skeleton variant="text" animation="wave" />
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Box
            sx={{
              backgroundColor: '#6C6CD9',
              width: '6rem',
              padding: '4px 2px',
              textAlign: 'center',
              color: 'white',
              position: 'absolute',
              top: -6,
              right: -6,
              fontWeight: 600,
              boxShadow:
                '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
            }}
          >
            Trip Owner
          </Box>
        </Box>
        <Stack
          direction="row"
          mt="2rem"
          // sx={{ backgroundColor: 'lightblue' }}
        >
          <Box sx={{ color: 'gray', width: '35%' }}>
            <Typography sx={classes.leftTitle}>Departure Location:</Typography>
            <Typography sx={classes.leftTitle}>Destination(s):</Typography>
            <Typography sx={classes.leftTitle}>Trip Reason:</Typography>
            <Typography sx={classes.leftTitle}>Status:</Typography>
            <Typography sx={classes.leftTitle}>Depart Date:</Typography>
            <Typography sx={classes.leftTitle}>Return Date:</Typography>
          </Box>
          <Box
            className="modal"
            sx={{
              marginLeft: { xs: 1, sm: 4 },
              width: '20rem',
            }}
          >
            <Typography sx={classes.RightValues}>
              <Skeleton variant="rectangular" animation="wave" height="29px" />
            </Typography>
            <Typography
              sx={classes.RightValues}
              display="flex"
              alignItems="center"
            >
              <Skeleton variant="rectangular" animation="wave" height="29px" />
            </Typography>
            <Typography sx={classes.RightValues}>
              <Skeleton variant="rectangular" animation="wave" height="29px" />
            </Typography>
            <Typography sx={classes.RightValues}>
              <Skeleton variant="rectangular" animation="wave" height="29px" />
            </Typography>
            <Typography sx={classes.RightValues}>
              <Skeleton variant="rectangular" animation="wave" height="29px" />
            </Typography>
            <Typography sx={classes.RightValues}>
              <Skeleton variant="rectangular" animation="wave" height="29px" />
            </Typography>
          </Box>
        </Stack>
      </Box>
      <ButtonGroup
        sx={{
          width: '100%',
          display: 'flex',
          gap: '0.5rem',
          position: 'absolute',
          bottom: '1rem',
          borderTop: '1px solid gray',
          justifyContent: 'center',
          paddingTop: '1rem',
        }}
      >
        <Skeleton variant="rectangular" animation="wave" height="29px" />
      </ButtonGroup>
    </Box>
  );
}
