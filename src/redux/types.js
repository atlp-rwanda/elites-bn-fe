export const SET_ACCOMMODATIONS = 'SET_ACCOMMODATIONS';
export const SET_LOCATIONS = 'SET_LOCATIONS';
export const SET_TRIP_REQUESTS = 'SET_TRIP_REQUESTS';
export const DELETE_TRIP_REQUEST = 'DELETE_TRIP_REQUEST';
export const APPROVE_TRIP_REQUEST = 'APPROVE_TRIP_REQUEST';
export const REJECT_TRIP_REQUEST = 'REJECT_TRIP_REQUEST';
export const LOAD_TRIP_REQUESTS = 'LOAD_TRIP_REQUESTS';
export const SET_TRIPS_OWNERS = 'SET_TRIPS_OWNERS';
export const actionTypes = {
  SET_ACCOMMODATIONS: 'SET_ACCOMMODATIONS',
  SET_TRIPSTATISTICS: 'SET_TRIPSTATISTICS',
  GET_MOSTVISITEDLOCATION: 'GET_MOSTVISITEDLOCATION',
  GET_USERS: 'GET_USERS',
  LOAD_USERS_FAIL: 'LOAD_USERS_FAIL',
  // Put all other types below
};
export const GET_ACCOMMODATIONS = 'GET_ACCOMMODATIONS';
export const ACCOMMODATIONS_ERROR = 'ACCOMMODATIONS_ERROR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
export const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
export const OPEN_GLOBAL_SNACKBAR = 'OPEN_GLOBAL_SNACKBAR';
export const CLOSE_GLOBAL_SNACKBAR = 'CLOSE_GLOBAL_SNACKBAR';

export const OPEN_LOADER = 'OPEN_LOADER';
export const CLOSE_LOADER = 'CLOSE_LOADER';

export const LOGOUT = 'LOGOUT';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const SET_CURRENT_USER_PROFILE = 'SET_CURRENT_USER_PROFILE';

export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAIRURE = 'USER_REGISTER_FAIRURE';

// LOGIN ACTION TYPES
export const LoginTypes = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL',
};

// ACCOMMODATION ACTION TYPE

export const accommodationFetchType = {
  ACCOMMODATION_FETCH_REQUEST: 'ACCOMMODATION_FETCH_REQUEST',
  ACCOMMODATION_FETCH_SUCCESS: 'ACCOMMODATION_FETCH_SUCCESS',
  ACCOMMODATION_FETCH_FAILURE: 'ACCOMMODATION_FETCH_FAILURE',
};

export const accommodationDeleteType = {
  ACCOMMODATION_DELETE_REQUEST: 'ACCOMMODATION_DELETE_REQUEST',
  ACCOMMODATION_DELETE_SUCCESS: 'ACCOMMODATION_DELETE_SUCCESS',
  ACCOMMODATION_DELETE_FAILURE: 'ACCOMMODATION_DELETE_FAILURE',
};

export const accommodationCreateType = {
  ACCOMMODATION_CREATE_REQUEST: 'ACCOMMODATION_CREATE_REQUEST',
  ACCOMMODATION_CREATE_SUCCESS: 'ACCOMMODATION_CREATE_SUCCESS',
  ACCOMMODATION_CREATE_FAILURE: 'ACCOMMODATION_CREATE_FAILURE',
};

export const accommodationUpdateType = {
  ACCOMMODATION_UPDATE_REQUEST: 'ACCOMMODATION_UPDATE_REQUEST',
  ACCOMMODATION_UPDATE_SUCCESS: 'ACCOMMODATION_UPDATE_SUCCESS',
  ACCOMMODATION_UPDATE_FAILURE: 'ACCOMMODATION_UPDATE_FAILURE',
};

// DASHBOARD ACTION TYPES
export const GET_TRIPSTATISTICS = 'GET_TRIPSTATISTICS';
