import 'babel-polyfill';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import setUserSearch from '../../src/redux/actions/userSearchAction';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore({});

describe('loginStore(creds)', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('Render most visited Location', () => {
    store.dispatch(setUserSearch());
  });
});