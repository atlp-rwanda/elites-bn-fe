import 'babel-polyfill';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import setTripStatics from '../../src/redux/actions/landingDashboardActions';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore({});

describe('loginStore(creds)', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('Render trip statistics', () => {
    store.dispatch(setTripStatics());
  });
});
