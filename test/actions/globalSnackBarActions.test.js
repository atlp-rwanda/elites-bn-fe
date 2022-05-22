import 'babel-polyfill';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  OPEN_GLOBAL_SNACKBAR,
  CLOSE_GLOBAL_SNACKBAR,
} from '../../src/redux/types';
import {
  closeGlobalSnackBar,
  openGlobalSnackBar,
} from '../../src/redux/actions/globalSnackBarActions';

const middleware = [thunk];
const mockStore = configureStore(middleware);

const store = mockStore({});

describe('GLOBAL SNACKBAR actions', () => {
  it('should dispatch the OPEN_GLOBAL_SNACKBAR action', () => {
    store.clearActions();
    store.dispatch(
      openGlobalSnackBar({
        message: 'Snackbar opened successfully',
        severity: 'success',
      })
    );
    const expectedAction = [
      {
        type: OPEN_GLOBAL_SNACKBAR,
        payload: {
          message: 'Snackbar opened successfully',
          severity: 'success',
        },
      },
    ];
    expect(store.getActions()).toEqual(expectedAction);
  });
  it('should dispatch the CLOSE_GLOBAL_SNACKBAR action', () => {
    store.clearActions();
    store.dispatch(closeGlobalSnackBar());
    const expectedAction = [{ type: CLOSE_GLOBAL_SNACKBAR }];
    expect(store.getActions()).toEqual(expectedAction);
  });
});
