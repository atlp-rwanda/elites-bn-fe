import tripRequestsReducer from '../../src/redux/reducers/tripRequestsReducer';
import {
  APPROVE_TRIP_REQUEST,
  DELETE_TRIP_REQUEST,
  REJECT_TRIP_REQUEST,
  SET_TRIP_REQUESTS,
} from '../../src/redux/types';

describe('Trip requests Reducer', () => {
  const initialState = {
    tripRequests: [],
    loading: true,
  };

  it('should return the initial state', () => {
    const reducer = tripRequestsReducer(undefined, {});
    expect(reducer).toEqual(initialState);
  });

  it('should return success when trip requests are retrieved', () => {
    const action = {
      type: SET_TRIP_REQUESTS,
    };

    const reducer = tripRequestsReducer(initialState, action);
    expect(reducer).toEqual({
      ...initialState,
      loading: false,
      tripRequests: undefined,
    });
  });
  it('should return success when trip request is deleted', () => {
    const action = {
      type: DELETE_TRIP_REQUEST,
    };

    const reducer = tripRequestsReducer(initialState, action);
    expect(reducer).toEqual({
      ...initialState,
      loading: false,
    });
  });
  it('should return success when trip request is approved', () => {
    const action = {
      type: APPROVE_TRIP_REQUEST,
    };

    const reducer = tripRequestsReducer(initialState, action);
    expect(reducer).toEqual({
      ...initialState,
      loading: false,
    });
  });
  it('should return success when trip request is rejected', () => {
    const action = {
      type: REJECT_TRIP_REQUEST,
    };

    const reducer = tripRequestsReducer(initialState, action);
    expect(reducer).toEqual({
      ...initialState,
      loading: false,
    });
  });
});
