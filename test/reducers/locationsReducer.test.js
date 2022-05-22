import locationsReducer from '../../src/redux/reducers/locationsReducer';
import { SET_LOCATIONS } from '../../src/redux/types';

describe('Locations Reducer', () => {
  const initialState = {
    locations: [],
    loading: true,
  };

  it('should return the initial state', () => {
    const reducer = locationsReducer(undefined, {});
    expect(reducer).toEqual(initialState);
  });

  it('should return success when locations retrieved', () => {
    const action = {
      type: SET_LOCATIONS,
    };

    const reducer = locationsReducer(initialState, action);
    expect(reducer).toEqual({
      ...initialState,
      loading: false,
      locations: undefined,
    });
  });
});
