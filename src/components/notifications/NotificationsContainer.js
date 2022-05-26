/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useRef } from 'react';
import moment from 'moment';
import { Box, Button, Divider, Paper, Stack, Typography } from '@mui/material';
import {
  Cancel,
  CheckCircle,
  Comment,
  DoneAll,
  Edit,
  FiberNew,
} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { closeNotificationPanel } from '../../redux/actions/notificationPanelActions';
import {
  markAllAsRead,
  markOneAsRead,
} from '../../redux/actions/notificationsActions';
import { loadSingleTripRequest } from '../../redux/actions/singleTripRequestActions';
import { openViewTrip } from '../../redux/actions/tripViewAction';
import { loadLocations } from '../../redux/actions/locationsActions';

const NotificationsContainer = () => {
  const token = JSON.parse(localStorage.getItem('userToken'))?.accesstoken;
  const dispatch = useDispatch();
  const box = useRef(null);

  function outsideClickHandler(ref) {
    useEffect(() => {
      // Function for click event
      function handleOutsideClick(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          // when clicked outside of notification panel
          dispatch(closeNotificationPanel());
        }
      }
      // Adding click event listener
      document.addEventListener('click', handleOutsideClick);
      return () => document.removeEventListener('click', handleOutsideClick);
    }, [ref]);
  }
  outsideClickHandler(box);

  useEffect(() => {
    dispatch(loadLocations());
  }, []);
  const entireState = useSelector((state) => state);
  const notificationsState = entireState.allNotifications;
  const { notifications } = notificationsState;

  const checkNotificationType = (notificationBody) => {
    let type;
    const body = notificationBody.split(' ');
    if (body.includes('approved')) {
      type = 'approved';
    } else if (body.includes('rejected')) {
      type = 'rejected';
    } else if (body.includes('commented')) {
      type = 'commented';
    } else if (body.includes('edited')) {
      type = 'edited';
    } else {
      type = 'created';
    }
    return type;
  };

  const handleNotificationClick = (id) => {
    dispatch(markOneAsRead(id, token));
  };

  const unreadNotifications = () => {
    const unreads = notifications.filter(
      (notification) => !notification.isRead
    );
    return unreads.length;
  };
  const style = {
    position: 'absolute',
    top: '10vh',
    right: { xs: '1rem', sm: '4rem' },
    width: { xs: '82vw', sm: '25vw' },
    backgroundColor: 'green',
    boxShadow: 10,
    outline: 0,
  };
  return (
    <div ref={box}>
      <Box sx={style}>
        <Paper
          elevation={0}
          sx={{
            backgroundColor: '#F4F8F5',
            maxHeight: '83vh',
            width: { xs: '82vw', sm: '25vw' },
            display: 'flex',
            justifyContent: 'center',
            overflow: 'auto',
            paddingTop: '1rem',
          }}
        >
          {notifications.length === 0 ? (
            <Typography>No notifications</Typography>
          ) : (
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                  m: 1,
                  width: '98%',
                },
              }}
            >
              <Paper>
                <Box
                  sx={{
                    width: '100%',
                    height: '3rem',
                    position: 'relative',
                  }}
                >
                  <Button
                    variant="outlined"
                    size="small"
                    endIcon={
                      <DoneAll
                        sx={{
                          color:
                            unreadNotifications() === 0
                              ? 'rgb(189, 189, 195)'
                              : '#00C944',
                        }}
                      />
                    }
                    sx={{ position: 'absolute', right: 0, margin: '0.5rem' }}
                    disabled={unreadNotifications() === 0}
                    onClick={() => {
                      dispatch(markAllAsRead(token));
                    }}
                  >
                    Mark all as Read
                  </Button>
                </Box>
                <Stack>
                  {notifications.map((notification) => {
                    const type = checkNotificationType(notification.body);
                    const timeAgo = moment(notification.createdAt).fromNow();
                    return (
                      <Box
                        bgcolor={notification.isRead ? 'white' : '#E5EAFF'}
                        sx={{
                          cursor: 'pointer',
                          '&:hover': { backgroundColor: 'rgb(204, 212, 255)' },
                        }}
                        key={notification.id}
                        onClick={() => {
                          !notification.isRead &&
                            handleNotificationClick(notification.id);
                        }}
                      >
                        <Stack
                          direction="row"
                          gap={2}
                          p={2}
                          alignItems="center"
                        >
                          {type === 'approved' ? (
                            <CheckCircle sx={{ color: '#26A716' }} />
                          ) : type === 'rejected' ? (
                            <Cancel sx={{ color: '#C50202' }} />
                          ) : type === 'created' ? (
                            <FiberNew sx={{ color: '#075099' }} />
                          ) : type === 'edited' ? (
                            <Edit sx={{ color: '#6674BB' }} />
                          ) : (
                            <Comment sx={{ color: '#C292CA' }} />
                          )}

                          <Typography
                            sx={{
                              '&:hover': {
                                textDecoration: 'underline solid blue 1px',
                              },
                            }}
                            onClick={() => {
                              dispatch(openViewTrip());
                              dispatch(
                                loadSingleTripRequest(notification.requestId)
                              );
                              dispatch(closeNotificationPanel());
                            }}
                          >
                            {notification.body}
                          </Typography>
                        </Stack>
                        <Typography
                          variant="subtitle2"
                          textAlign="right"
                          sx={{
                            color: '#AEAEAE',
                            marginRight: '0.8rem',
                            fontWeight: 400,
                          }}
                        >
                          {timeAgo}
                        </Typography>
                        <Divider />
                      </Box>
                    );
                  })}
                </Stack>
              </Paper>
            </Box>
          )}
        </Paper>
      </Box>
    </div>
  );
};

export default NotificationsContainer;
