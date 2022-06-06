import AccommodationCreateReducer from '../../src/redux/reducers/accommodationCreateReducer';
import { accommodationCreateType } from '../../src/redux/types';

describe('AccommodationCreateReducer(state, action)', () => {
  const initialState = {
    loading: false,
  };

  const deleteRequestAction = {
    type: accommodationCreateType.ACCOMMODATION_CREATE_REQUEST,
    payload: 'payload',
  };

  const deleteFailureAction = {
    type: accommodationCreateType.ACCOMMODATION_CREATE_FAILURE,
    payload: 'payload',
  };

  const deleteSuccessAction = {
    type: accommodationCreateType.ACCOMMODATION_CREATE_SUCCESS,
    payload: 'payload',
  };

  const deleteInvalidAction = {
    type: 'INVALID',
  };

  it('should return loading True', () => {
    const reducer = AccommodationCreateReducer(
      initialState,
      deleteRequestAction
    );
    expect(reducer).toEqual({ loading: true });
  });

  it('should return loading false loading fail', () => {
    const reducer = AccommodationCreateReducer(
      initialState,
      deleteFailureAction
    );
    expect(reducer).toEqual({ loading: false, error: 'payload' });
  });

  it('should return loading false loading success', () => {
    const reducer = AccommodationCreateReducer(
      initialState,
      deleteSuccessAction
    );
    expect(reducer).toEqual({ loading: false, data: 'payload' });
  });

  it('should return loading false loading invalid', () => {
    const reducer = AccommodationCreateReducer(
      initialState,
      deleteInvalidAction
    );
    expect(reducer).toEqual({ loading: false });
  });
});
