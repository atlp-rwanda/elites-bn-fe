import { combineReducers } from 'redux';
import accommodationReducer from './accommodationsReducer';
import loginReducers from './loginReducers';
import SnackBarReducer from './snackbarReduces';

export default combineReducers({
  allAccommodations: accommodationReducer,
  login: loginReducers,
  SnackBar: SnackBarReducer, 
});

