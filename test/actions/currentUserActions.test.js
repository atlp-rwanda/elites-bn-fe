import 'babel-polyfill';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  SET_CURRENT_USER,
  SET_CURRENT_USER_PROFILE,
} from '../../src/redux/types';
import { currentUserInfo } from '../dummyData';
import setCurrentUser, {
  setCurrentUserProfile,
} from '../../src/redux/actions/currentUserActions';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore({});

describe('CURRENT USER', () => {
  it('should dispatch SET_CURRENT_USER action', () => {
    store.clearActions();
    store.dispatch(setCurrentUser(currentUserInfo));
    const expectedAction = [
      { type: SET_CURRENT_USER, payload: currentUserInfo },
    ];
    expect(store.getActions()).toEqual(expectedAction);
  });
  it('should dispatch SET_CURRENT_USER_PROFILE action', () => {
    store.clearActions();
    store.dispatch(setCurrentUserProfile(currentUserInfo));
    const expectedAction = [
      { type: SET_CURRENT_USER_PROFILE, payload: currentUserInfo },
    ];
    expect(store.getActions()).toEqual(expectedAction);
  });
});
