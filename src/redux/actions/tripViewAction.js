import { OPEN_VIEW_TRIP, CLOSE_VIEW_TRIP } from '../types';

export const openViewTrip = () => ({
  type: OPEN_VIEW_TRIP,
});

export const closeViewTrip = () => ({
  type: CLOSE_VIEW_TRIP,
});
