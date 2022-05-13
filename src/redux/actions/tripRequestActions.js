import { actionTypes } from '../types';

const {
  SET_STEP_ONE_REQUESTS,
  ADD_MULTICITY,
  SET_STEP_ONE_DEPART_DATE,
  SET_STEP_ONE_RETURN_DATE,
  SET_STEP_TWO_TRIP_REQUEST_REASON,
  SET_STEP_TWO_TRIP_REQUEST_REMEMBER_ME,
  INITIALIZE,
  UPDATE_TRIP_REQUEST
} = actionTypes;

export const setStepOneRequests = (request) => ({
  type: SET_STEP_ONE_REQUESTS,
  payload: request,
});
export const setStepOneDepartDate = (returnDate) => ({
  type: SET_STEP_ONE_DEPART_DATE,
  payload: returnDate,
});

export const setStepOneReturnDate = (departDate) => ({
  type: SET_STEP_ONE_RETURN_DATE,
  payload: departDate,
});

export const setStepTwoTripRequestReason = (reason) => ({
  type: SET_STEP_TWO_TRIP_REQUEST_REASON,
  payload: reason,
});

export const setStepTwoTripRequestRememberMe = (rememberMe) => ({
  type: SET_STEP_TWO_TRIP_REQUEST_REMEMBER_ME,
  payload: rememberMe,
});

export const addMulticity = (multicity) => ({
   type: ADD_MULTICITY, payload: multicity 
});

export const initialize  = ()=>({
  type:INITIALIZE,
})

export const updateTripRequest = (tripToUpdate)=>({
  type:UPDATE_TRIP_REQUEST,
  payload:tripToUpdate
})
