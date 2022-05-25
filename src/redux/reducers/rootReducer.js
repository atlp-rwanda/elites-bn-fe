import { combineReducers } from 'redux';
import accommodationReducer from './accommodationsReducer';
import currentUserReducer from './currentUserReducer';
import locationsReducer from './locationsReducer';
import loginReducers from './loginReducers';
import SnackBarReducer from './snackbarReduces';
import signupReducer from './signupReducer';
import tripRequestsReducer from './tripRequestsReducer';
import loaderReducer from './loaderReducer';
import globalSnackBarReducer from './globalSnackBarReducer';
import AccommodationListReducer from './accommodationListReducer';
import AccommodationDeleteReducer from './accommodationDeleteReducer';
import AccommodationCreateReducer from './accommodationCreateReducer';
import AccommodationUpdateReducer from './accommodationUpdateReducer';
import landingDashboardReducers from './landingDashboardReducers';
import mostTravelledReducer from './mostTravelledReducer';
import usersReducers from './usersReducers';
import notificationsReducer from './notificationsReducer';
import notificationPanelReducer from './notificationPanelReducer';
import singleTripRequestReducer from './singleTripRequestReducer';
import tripViewReducer from './tripViewReducer';
import tripRequestReducer from './tripRequestReducer'
import allLocationsReducer from './allLocationsReducer'
import AccommodationReviewCreateReducer from './accommodationCreateReviewReducer';

export default combineReducers({
  mostTravelledLocation: mostTravelledReducer,
  tripStatistics: landingDashboardReducers,
  allAccommodations: accommodationReducer,
  allTripRequests: tripRequestsReducer,
  singleTrip: singleTripRequestReducer,
  allLocations: locationsReducer,
  login: loginReducers,
  SnackBar: SnackBarReducer,
  loader: loaderReducer,
  globalSnackBar: globalSnackBarReducer,
  tripView: tripViewReducer,
  signup: signupReducer,
  currentUser: currentUserReducer,
  accommodations: AccommodationListReducer,
  accommodationDelete: AccommodationDeleteReducer,
  accommodationCreate: AccommodationCreateReducer,
  accommodationUpdate: AccommodationUpdateReducer,
  users: usersReducers,
  allNotifications: notificationsReducer,
  notificationPanel: notificationPanelReducer,
  Locations:allLocationsReducer,
  tripRequest:tripRequestReducer,
  reviewAccommodation: AccommodationReviewCreateReducer,
});
