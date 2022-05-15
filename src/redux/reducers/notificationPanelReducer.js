import { OPEN_NOTIFICATION_PANEL, CLOSE_NOTIFICATION_PANEL } from '../types';

const initialState = {
  notificationPanelOpen: false,
};

const notificationPanelReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_NOTIFICATION_PANEL:
      return {
        ...state,
        notificationPanelOpen: true,
      };
    case CLOSE_NOTIFICATION_PANEL:
      return {
        ...state,
        notificationPanelOpen: false,
      };
    default:
      return state;
  }
};

export default notificationPanelReducer;
