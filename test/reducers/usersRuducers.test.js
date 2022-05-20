import usersReducers from '../../src/redux/reducers/usersReducers';
import { actionTypes } from '../../src/redux/types';

describe('usersReducers(state,action)', () => {
  const initialState = {
    users: [],
    roles: [],
    loading: true,
    updated: false,
  };

  const user = [
    {
      id: 54,
      names: 'David NKUNDINEZA',
      email: 'devidbinfan@gmail.com',
      password: null,
      isActive: null,
      verified: false,
      notifyByEmail: true,
      ManagerId: null,
    },
  ];

  const role = [{ id: 1, name: 'admin' }];

  it('should return the initial state', () => {
    const reducer = usersReducers(undefined, {});
    expect(reducer).toEqual(initialState);
  });

  it('should return the failure to load user', () => {
    const reducer = usersReducers(initialState, {
      type: actionTypes.LOAD_USERS_FAIL,
      payload: ' failed to load users',
    });
    expect(reducer).toEqual({
      ...initialState,
      users: ' failed to load users',
    });
  });

  it('should return the failure to load roles', () => {
    const reducer = usersReducers(initialState, {
      type: actionTypes.FAILED_TO_LOAD_ROLES,
      payload: ' failed to load roles',
    });
    expect(reducer).toEqual({ ...initialState, roles: undefined });
  });

  it('should return the failure to update role', () => {
    const reducer = usersReducers(initialState, {
      type: actionTypes.FAILED_TO_UPDATE,
      payload: ' failed to update roles',
    });
    expect(reducer).toEqual({ ...initialState });
  });

  it('should return the success to fetch users', () => {
    const reducer = usersReducers(initialState, {
      type: actionTypes.GET_USERS,
      payload: { users: user },
    });
    expect(reducer).toEqual({ ...initialState, users: user, loading: false });
  });

  it('should return the success to fetch roles', () => {
    const reducer = usersReducers(initialState, {
      type: actionTypes.SET_ROLES,
      payload: { roles: role },
    });
    expect(reducer).toEqual({ ...initialState, roles: role});
  });
});
