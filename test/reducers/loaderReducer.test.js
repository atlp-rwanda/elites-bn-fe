import loaderReducer from '../../src/redux/reducers/loaderReducer';
import { CLOSE_LOADER, OPEN_LOADER } from '../../src/redux/types';

describe('Loader Reducer', () => {
  const initialState = {
    loaderOpen: false,
  };

  it('should return the initial state', () => {
    const reducer = loaderReducer(undefined, {});
    expect(reducer).toEqual(initialState);
  });

  it('should open the loader', () => {
    const action = {
      type: OPEN_LOADER,
    };

    const reducer = loaderReducer(initialState, action);
    expect(reducer).toEqual({
      ...initialState,
      loaderOpen: true,
    });
  });
  it('should close the loader', () => {
    const action = {
      type: CLOSE_LOADER,
    };

    const reducer = loaderReducer(initialState, action);
    expect(reducer).toEqual({
      ...initialState,
      loaderOpen: false,
    });
  });
});
