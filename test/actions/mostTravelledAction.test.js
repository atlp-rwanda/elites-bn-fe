import 'babel-polyfill';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import setMostVisitedLocation from '../../src/redux/actions/mostVisitedAction';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore({});

describe('loginStore(creds)', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('Render most visited Location', () => {
    store.dispatch(setMostVisitedLocation());
  });
});
