import singleTripRequestReducer from '../../src/redux/reducers/singleTripRequestReducer';

import {
  CLEAR_SINGLE_TRIP_REQUEST,
  SET_SINGLE_TRIP_REQUEST,
} from '../../src/redux/types';

describe('SINGLE TRIP REQUEST Reducer', () => {
  const initialState = {
    tripRequest: '',
    loading: true,
  };

  it('should return the initial state', () => {
    const reducer = singleTripRequestReducer(undefined, {});
    expect(reducer).toEqual(initialState);
  });

  it('should return success when trip request is retrieved', () => {
    const action = {
      type: SET_SINGLE_TRIP_REQUEST,
    };

    const reducer = singleTripRequestReducer(initialState, action);
    expect(reducer).toEqual({
      ...initialState,
      loading: false,
      tripRequest: undefined,
    });
  });
  it('should return success when cleared trip request', () => {
    const action = {
      type: CLEAR_SINGLE_TRIP_REQUEST,
    };

    const reducer = singleTripRequestReducer(initialState, action);
    expect(reducer).toEqual(initialState);
  });
});
