import { actionTypes } from '../../src/redux/types';
import globalUserSearchReducer from '../../src/redux/reducers/userSearchReducer';

const { GET_USERSEARCH } = actionTypes;

describe('globalUserSearchReducer(state,action)', () => {
  const initialState = {
    globalUserSearch: [],
    loading: true,
  };

  const setUserSearcAction = { type: GET_USERSEARCH, payload: 'payload' };
  const setInvalidAction = { type: 'invalid', payload: 'payload' };

  it('should return payload and loading', () => {
    const reducer = globalUserSearchReducer(initialState, setUserSearcAction);
    expect(reducer).toEqual({ loading: false, globalUserSearch: 'payload' });
  });

  it('should return invalid payload', () => {
    const reducer = globalUserSearchReducer(initialState, setInvalidAction);
    expect(reducer).toEqual({ loading: true, globalUserSearch: [] });
  });
});
