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
import tripRequestReducer from './tripRequestReducer';
import allLocationsReducer from './allLocationsReducer';
import AccommodationReviewCreateReducer from './accommodationCreateReviewReducer';
import globalUserSearchReducer from './userSearchReducer';
import chatReducers from './chatReducers';
import bookingRoomReducers from './bookingRoomReducers';
import BookingConfirmationCreateReducer from './bookingConfirmationReducer';
import BookingSetAccommodationIdReducer from './bookingSetAccommodationIdReducer';
import BookingConfirmationSetTripIdReducer from './bookingConfirmationSetTripIdReducer';
import profileReducer from './profileReducer';
import resetPasswordReducers from './forgotPasswordReducers';
import resetMessageReducer from './resetMessageReducer';
import likeAccommodations from './likeAccommodationCreateReducer';
import dislikeAccommodationCreateReducer from './dislikeAccommodationCreateReducer';

export default combineReducers({
  mostTravelledLocation: mostTravelledReducer,
  tripStatistics: landingDashboardReducers,
  globalUserSearch: globalUserSearchReducer,
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
  Locations: allLocationsReducer,
  tripRequest: tripRequestReducer,
  reviewAccommodation: AccommodationReviewCreateReducer,
  chat: chatReducers,
  allRooms: bookingRoomReducers,
  bookingConfrimationCreate: BookingConfirmationCreateReducer,
  bookingSetAccommodationIdReducer: BookingSetAccommodationIdReducer,
  bookingConfirmationSetTripIdReducer: BookingConfirmationSetTripIdReducer,
  profile:profileReducer,
  forgotPassword:  resetPasswordReducers,
  resetMessage: resetMessageReducer,
  like: likeAccommodations,
  dislike: dislikeAccommodationCreateReducer,
});
