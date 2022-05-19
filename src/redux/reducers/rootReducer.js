import { combineReducers } from 'redux';
import accommodationReducer from './accommodationsReducer';
import currentUserReducer from './currentUserReducer';
import locationsReducer from './locationsReducer';
import loginReducers from './loginReducers';
import SnackBarReducer from './snackbarReduces';
import signupReducer from './signupReducer';
import tripRequestsReducer from './tripRequestsReducer';
import loaderReducer from './loaderReducer';

export default combineReducers({
  allAccommodations: accommodationReducer,
  allTripRequests: tripRequestsReducer,
  allLocations: locationsReducer,
  login: loginReducers,
  SnackBar: SnackBarReducer,
  loader: loaderReducer,
  signup: signupReducer,
  currentUser: currentUserReducer,
});
