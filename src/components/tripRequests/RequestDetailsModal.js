/* eslint-disable no-nested-ternary */
import * as React from 'react';
import Box from '@mui/material/Box';
import moment from 'moment';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ButtonGroup, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import CloseIcon from '@mui/icons-material/Close';
import './requestsTable.scss';
import ConfirmModal from '../confirmModal/ConfirmModal';

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

export default function BasicModal(props) {
  const { show, close, tripRequest } = props;
  const [showConfirmModal, setShowConfirmModal] = React.useState(false);
  const [confirmModalData, setConfirmModalData] = React.useState('');

  const entireState = useSelector((state) => state);
  const tripRequestsState = entireState.allTripRequests;
  const locationsState = entireState.allLocations;
  const currentUserState = entireState.currentUser;

  const { tripRequests } = tripRequestsState;
  const { currentUser } = currentUserState;
  const { locations } = locationsState;/////////
  const currentTripRequest = tripRequests.filter(
    (request) => request.id === tripRequest,
  );

  if (currentTripRequest.length === 1) {
    const {
      id,
      names,
      returnDate,
      departDate,
      departLocation,
      destinations,
      passportNumber,
      tripReason,
      status,
      address,
      User,
    } = currentTripRequest[0];

    const departLocationName = locations.filter(
      (location) => location.id === departLocation,
    )[0].locationName;

    let destinationNames;

    if (destinations.length === 1) {
      const parsedDestinations = JSON.parse(destinations);
      destinationNames = locations.filter(
        (location) => location.id === parsedDestinations.destinationId,
      )[0].locationName;
    }
    if (destinations.length > 1) {
      destinationNames = destinations.map((destination) => {
        const parsedDestination = JSON.parse(destination);
        let thisLocationName;
        for (let i = 0; i < locations.length; i++) {
          if (parsedDestination.destinationId === locations[i].id) {
            thisLocationName = locations[i].locationName;
          }
        }
        return thisLocationName;
      });
    }

    return (
      <div>
        <Modal
          open={show}
          onClose={close}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
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

            <CloseIcon sx={classes.closeIcon} onClick={close} />
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
                  <img
                    style={classes.userInfo.userImg}
                    alt="user"
                    src={
                      User?.Profile?.picture
                      ?? 'https://res.cloudinary.com/dpd4zujfh/image/upload/v1653137040/barefoot_api/profiles/avatar_fjiug5.jpg'
                    }
                  />
                </Box>
                <Box flex={1} display="flex" alignItems="center">
                  <Stack direction="row" spacing={2}>
                    <Box sx={{ color: '#07539F' }}>
                      <Typography>Names:</Typography>
                      <Typography>Address:</Typography>
                      <Typography>Passport:</Typography>
                    </Box>
                    <Box sx={{ color: 'white' }}>
                      <Typography>{names}</Typography>
                      <Typography>{address}</Typography>
                      <Typography>{passportNumber}</Typography>
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
                  <Typography sx={classes.leftTitle}>
                    Departure Location:
                  </Typography>
                  <Typography sx={classes.leftTitle}>
                    Destination(s):
                  </Typography>
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
                    {departLocationName}
                  </Typography>
                  <Typography
                    sx={classes.RightValues}
                    display="flex"
                    alignItems="center"
                  >
                    {!Array.isArray(destinationNames)
                      ? destinationNames
                      : destinationNames.map((destination, i, arr) => (
                        <React.Fragment key={i}>
                          {destination}
                          {i + 1 === arr.length ? (
                            ' .'
                          ) : (
                            <DoubleArrowIcon sx={classes.arrowIcon} />
                          )}
                        </React.Fragment>
                      ))}
                  </Typography>
                  <Typography sx={classes.RightValues}>{tripReason}</Typography>
                  <Typography
                    className={`cellWithStatus ${status}`}
                    sx={classes.RightValues}
                  >
                    {status}
                  </Typography>
                  <Typography sx={classes.RightValues}>
                    {moment(departDate).format('ddd, MMM Do YYYY')}
                  </Typography>
                  <Typography sx={classes.RightValues}>
                    {moment(returnDate).format('ddd, MMM Do YYYY')}
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
              {status === 'pending' ? (
                currentUser.roleId === 3 ? (
                  <>
                    <Button
                      variant="contained"
                      size="medium"
                      color="success"
                      onClick={() => {
                        setConfirmModalData({
                          message:
                            'Are you sure you want to APPROVE this trip request?',
                          action: 'approve',
                          id,
                        });
                        setShowConfirmModal(true);
                      }}
                    >
                      Approve
                    </Button>
                    <Button
                      variant="contained"
                      size="medium"
                      color="secondary"
                      onClick={() => {
                        setConfirmModalData({
                          message:
                            'Are you sure you want to REJECT this trip request?',
                          action: 'reject',
                          id,
                        });
                        setShowConfirmModal(true);
                      }}
                    >
                      Reject
                    </Button>
                  </>
                ) : currentUser.roleId === 5 ? (
                  <Button variant="contained" size="medium" color="primary">
                    Edit
                  </Button>
                ) : (
                  <Typography color="blue">
                    You are only allowed to view
                  </Typography>
                )
              ) : currentUser.roleId === 3 ? (
                <>
                  <Button
                    variant="contained"
                    size="medium"
                    color="success"
                    disabled
                  >
                    Approve
                  </Button>
                  <Button
                    variant="contained"
                    size="medium"
                    color="secondary"
                    disabled
                  >
                    Reject
                  </Button>
                </>
              ) : currentUser.roleId === 5 ? (
                <Button
                  variant="contained"
                  size="medium"
                  color="primary"
                  disabled
                >
                  Edit
                </Button>
              ) : (
                <Typography color="blue">
                  You are only allowed to view
                </Typography>
              )}
            </ButtonGroup>
          </Box>

        </Modal>
        {confirmModalData && (
          <ConfirmModal
            showModal={showConfirmModal}
            close={() => setShowConfirmModal(false)}
            modalData={confirmModalData}
          />
        )}
      </div>
    );
  }
}
