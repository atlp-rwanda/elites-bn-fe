import { OPEN_NOTIFICATION_PANEL, CLOSE_NOTIFICATION_PANEL } from '../types';

export const showNotificationPanel = () => (dispatch) => {
  dispatch({ type: OPEN_NOTIFICATION_PANEL });
};

export const closeNotificationPanel = () => (dispatch) => {
  dispatch({ type: CLOSE_NOTIFICATION_PANEL });
};
