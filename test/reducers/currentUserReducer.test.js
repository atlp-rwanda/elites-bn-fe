import currentUserReducer from '../../src/redux/reducers/currentUserReducer';
import {
  SET_CURRENT_USER,
  SET_CURRENT_USER_PROFILE,
} from '../../src/redux/types';

describe('Current User Reducer', () => {
  const initialState = {
    currentUser: [],
    loading: true,
  };

  it('should return the initial state', () => {
    const reducer = currentUserReducer(undefined, {});
    expect(reducer).toEqual(initialState);
  });

  it('should retrieve the current user', () => {
    const action = {
      type: SET_CURRENT_USER,
    };

    const reducer = currentUserReducer(initialState, action);
    expect(reducer).toEqual({
      ...initialState,
      loading: false,
      currentUser: undefined,
    });
  });
  it('should retrieve the current user profile', () => {
    const action = {
      type: SET_CURRENT_USER_PROFILE,
    };

    const reducer = currentUserReducer(initialState, action);
    expect(reducer).toEqual({
      ...initialState,
      loading: false,
      currentUserProfile: undefined,
    });
  });
});
