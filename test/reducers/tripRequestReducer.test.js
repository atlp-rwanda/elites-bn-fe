import { actionTypes } from '../../src/redux/types';
const {
  SET_STEP_ONE_REQUESTS,
  ADD_MULTICITY,
  SET_STEP_ONE_DEPART_DATE,
  SET_STEP_ONE_RETURN_DATE,
  SET_STEP_TWO_TRIP_REQUEST_REASON,
  SET_STEP_TWO_TRIP_REQUEST_REMEMBER_ME,
  INITIALIZE,
  UPDATE_TRIP_REQUEST,
} = actionTypes;
import tripRequestReducer from '../../src/redux/reducers/tripRequestReducer';

describe('TRIP REQUEST REDUCER', () => {
  const initialState = {
    stepOne: {
      requests: [{ destination: '', departLocation: '', accomodation: '' }],
      departDate: new Date().toISOString().split('T')[0],
      returnDate: new Date().toISOString().split('T')[0],
    },
    stepTwo: { tripReason: '', rememberMe: '' },
  };

  const setStepOneActions = {
    type: SET_STEP_ONE_REQUESTS,
    payload: 'payload',
  };

  const setDepartDateActions = {
    type: SET_STEP_ONE_DEPART_DATE,
    payload: 'payload',
  };
  const setReturnDateActions = {
    type: SET_STEP_ONE_RETURN_DATE,
    payload: 'payload',
  };
  const setTripRequestReasonActions = {
    type: SET_STEP_TWO_TRIP_REQUEST_REASON,
    payload: 'payload',
  };
  const setRememberMeActions = {
    type: SET_STEP_TWO_TRIP_REQUEST_REMEMBER_ME,
    payload: 'payload',
  };
  const initializeActions = {
    type: INITIALIZE,
    payload: 'payload',
  };
  const addMulticityActions = {
    type: ADD_MULTICITY,
    payload: 'payload',
  };
  const updateTripRequestActions = {
    type: UPDATE_TRIP_REQUEST,
    payload: 'payload',
  };

  it('should set step one requests', () => {
    const reducer = tripRequestReducer(initialState, setStepOneActions);
    expect(reducer).toEqual({
      stepOne: {
        requests: 'payload',
        departDate: new Date().toISOString().split('T')[0],
        returnDate: new Date().toISOString().split('T')[0],
      },
      stepTwo: { tripReason: '', rememberMe: '' },
    });
  });

  it('should set step one depart date', () => {
    const reducer = tripRequestReducer(initialState, setDepartDateActions);
    expect(reducer).toEqual({
      stepOne: {
        requests: [{ destination: '', departLocation: '', accomodation: '' }],
        departDate: 'payload',
        returnDate: new Date().toISOString().split('T')[0],
      },
      stepTwo: { tripReason: '', rememberMe: '' },
    });
  });

  it('should set step one return date', () => {
    const reducer = tripRequestReducer(initialState, setReturnDateActions);
    expect(reducer).toEqual({
      stepOne: {
        requests: [{ destination: '', departLocation: '', accomodation: '' }],
        departDate: new Date().toISOString().split('T')[0],
        returnDate: 'payload',
      },
      stepTwo: { tripReason: '', rememberMe: '' },
    });
  });

  it('should set step two trip reason', () => {
    const reducer = tripRequestReducer(
      initialState,
      setTripRequestReasonActions
    );
    expect(reducer).toEqual({
      stepOne: {
        requests: [{ destination: '', departLocation: '', accomodation: '' }],
        departDate: new Date().toISOString().split('T')[0],
        returnDate: new Date().toISOString().split('T')[0],
      },
      stepTwo: { tripReason: 'payload', rememberMe: '' },
    });
  });

  it('should set step two rememeber me', () => {
    const reducer = tripRequestReducer(initialState, setRememberMeActions);
    expect(reducer).toEqual({
      stepOne: {
        requests: [{ destination: '', departLocation: '', accomodation: '' }],
        departDate: new Date().toISOString().split('T')[0],
        returnDate: new Date().toISOString().split('T')[0],
      },
      stepTwo: { tripReason: '', rememberMe: 'payload' },
    });
  });

  it('should initialize trip request', () => {
    const reducer = tripRequestReducer(initialState, initializeActions);
    expect(reducer).toEqual({
      stepOne: {
        requests: [{ destination: '', departLocation: '', accomodation: '' }],
        departDate: new Date().toISOString().split('T')[0],
        returnDate: new Date().toISOString().split('T')[0],
      },
      stepTwo: { tripReason: '', rememberMe: '' },
    });
  });

  it('should add multicity', () => {
    const reducer = tripRequestReducer(initialState, addMulticityActions);
    expect(reducer).toEqual({
      stepOne: {
        requests: [
          { destination: '', departLocation: '', accomodation: '' },
          'payload',
        ],
        departDate: new Date().toISOString().split('T')[0],
        returnDate: new Date().toISOString().split('T')[0],
      },
      stepTwo: { tripReason: '', rememberMe: '' },
    });
  });

  it('should update trip request', () => {
    const reducer = tripRequestReducer(initialState, updateTripRequestActions);
    expect(reducer).toEqual('payload');
  });
});
