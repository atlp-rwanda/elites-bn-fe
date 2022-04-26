import { combineReducers } from 'redux';
import accommodationReducer from './accommodationsReducer';

export default combineReducers({
  accommodations: accommodationReducer,
});
