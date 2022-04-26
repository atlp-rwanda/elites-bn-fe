import chatReducers from '../../src/redux/reducers/chatReducers';

import { actionTypes } from '../../src/redux/types';

const payload ={
    chats: 'failed to load chats'
}

describe('NOTIFICATIONS Reducer', () => {
  const initialState = {} 

  it('should return the initial state', () => {
    const reducer = chatReducers(undefined,{});
    expect(reducer).toEqual(initialState);
  });

  it('should return success when chats are retrieved', () => {
    const action = {
      type: actionTypes.GET_CHATS,
      payload: payload.chats
    };

    const reducer =chatReducers(initialState, action);
    expect(reducer).toEqual({
      ...initialState,
      chats: undefined,
    });
  });
  it('should return fail when failed to load chats', () => {
    const action = {
      type: actionTypes.FAILED_TO_LOAD_CHATS,
      payload: payload.chats
    };

    const reducer = chatReducers(initialState, action);
    expect(reducer).toEqual({
      ...initialState,
      chats: payload.chats,
    });
  });
});
