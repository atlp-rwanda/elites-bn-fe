/* eslint-disable no-nested-ternary */
import React from 'react';
import { Box, Modal } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { closeNotificationPanel } from '../../redux/actions/notificationPanelActions';
import NotificationsContainer from './NotificationsContainer';

const NotificationsPanel = () => {
  const entireState = useSelector((state) => state);
  const notificationPanelState = entireState.notificationPanel;
  const { notificationPanelOpen } = notificationPanelState;

  const dispatch = useDispatch();
  const handleClose = (event, reason) => {
    if (reason && reason === 'backdropClick') {
      dispatch(closeNotificationPanel());
    }
  };

  return (
    <Box>
      <Modal open={notificationPanelOpen} onClose={handleClose} hideBackdrop>
        <NotificationsContainer />
      </Modal>
    </Box>
  );
};

export default NotificationsPanel;
