import globalSnackBarReducer from '../../src/redux/reducers/globalSnackBarReducer';
import {
  CLOSE_GLOBAL_SNACKBAR,
  OPEN_GLOBAL_SNACKBAR,
} from '../../src/redux/types';

describe('GLOBAL SNACKBAR Reducer', () => {
  const initialState = {
    snackBarOpen: false,
    message: '',
    severity: '',
  };

  it('should return the initial state', () => {
    const reducer = globalSnackBarReducer(undefined, {});
    expect(reducer).toEqual(initialState);
  });

  it('should open the global snackbar', () => {
    const action = {
      type: OPEN_GLOBAL_SNACKBAR,
      payload: {
        message: 'Global snackbar opened successfully!',
        severity: 'success',
      },
    };

    const reducer = globalSnackBarReducer(initialState, action);
    expect(reducer).toEqual({
      ...initialState,
      snackBarOpen: true,
      message: action.payload.message,
      severity: action.payload.severity,
    });
  });
  it('should close the global snackbar ', () => {
    const action = {
      type: CLOSE_GLOBAL_SNACKBAR,
    };

    const reducer = globalSnackBarReducer(initialState, action);
    expect(reducer).toEqual({
      ...initialState,
      snackBarOpen: false,
      message: '',
      severity: '',
    });
  });
});
