import notificationsReducer from '../../src/redux/reducers/notificationsReducer';

import {
  MARK_ALL_AS_READ,
  MARK_ONE_AS_READ,
  SET_NOTIFICATIONS,
} from '../../src/redux/types';

describe('NOTIFICATIONS Reducer', () => {
  const initialState = {
    notifications: [],
    loading: true,
  };

  it('should return the initial state', () => {
    const reducer = notificationsReducer(undefined, {});
    expect(reducer).toEqual(initialState);
  });

  it('should return success when notifications are retrieved', () => {
    const action = {
      type: SET_NOTIFICATIONS,
    };

    const reducer = notificationsReducer(initialState, action);
    expect(reducer).toEqual({
      ...initialState,
      loading: false,
      notifications: undefined,
    });
  });
  it('should return success when marked all as read', () => {
    const action = {
      type: MARK_ALL_AS_READ,
    };

    const reducer = notificationsReducer(initialState, action);
    expect(reducer).toEqual({
      ...initialState,
      loading: false,
    });
  });
  it('should return success when marked one as read', () => {
    const action = {
      type: MARK_ONE_AS_READ,
    };

    const reducer = notificationsReducer(initialState, action);
    expect(reducer).toEqual({
      ...initialState,
      loading: false,
    });
  });
});
