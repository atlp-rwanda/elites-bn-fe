import { actionTypes } from '../types';

const {
  SET_STEP_ONE_REQUESTS,
  ADD_MULTICITY,
  SET_STEP_TWO_TRIP_REQUEST_REASON,
  SET_STEP_ONE_DEPART_DATE,
  SET_STEP_ONE_RETURN_DATE,
  SET_STEP_TWO_TRIP_REQUEST_REMEMBER_ME,
  INITIALIZE,
  UPDATE_TRIP_REQUEST,
} = actionTypes;

const initialState = {
  stepOne: {
    requests: [{ destination: '', departLocation: '', accomodation: '' }],
    departDate: new Date().toISOString().split('T')[0],
    returnDate: new Date().toISOString().split('T')[0],
  },
  stepTwo: { tripReason: '', rememberMe: '' },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_STEP_ONE_REQUESTS:
      return {
        ...state,
        stepOne: {
          ...state.stepOne,
          requests: action.payload,
        },
      };

    case SET_STEP_TWO_TRIP_REQUEST_REASON:
      return {
        ...state,
        stepTwo: {
          ...state.stepTwo,
          tripReason: action.payload,
        },
      };

    case SET_STEP_TWO_TRIP_REQUEST_REMEMBER_ME:
      return {
        ...state,
        stepTwo: {
          ...state.stepTwo,
          rememberMe: action.payload,
        },
      };

    case SET_STEP_ONE_DEPART_DATE:
      return {
        ...state,
        stepOne: { ...state.stepOne, departDate: action.payload },
      };

    case SET_STEP_ONE_RETURN_DATE:
      return {
        ...state,
        stepOne: { ...state.stepOne, returnDate: action.payload },
      };

    case ADD_MULTICITY:
      return {
        ...state,
        stepOne: {
          ...state.stepOne,
          requests: [...state.stepOne.requests, action.payload],
        },
      };

    case INITIALIZE:
      return {
        stepOne: {
          requests: [{ destination: '', departLocation: '', accomodation: '' }],
          departDate: new Date().toISOString().split('T')[0],
          returnDate: new Date().toISOString().split('T')[0],
        },
        stepTwo: { tripReason: '', rememberMe: '' },
      };

    case UPDATE_TRIP_REQUEST:
      return action.payload;

    default:
      return state;
  }
}
