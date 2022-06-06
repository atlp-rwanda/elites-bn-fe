import LikeAccommodationCreateReducer from '../../src/redux/reducers/likeAccommodationCreateReducer';
import { likeAccommodationCreateType } from '../../src/redux/types';

describe('LikeAccommodationCreateReducer(state, action)', () => {
  const initialState = {
    loading: false,
  };

  const likeRequestAction = {
    type: likeAccommodationCreateType.LIKE_ACCOMMODATION_CREATE_REQUEST,
    payload: 'payload',
  };

  const likeFailureAction = {
    type: likeAccommodationCreateType.LIKE_ACCOMMODATION_CREATE_FAILURE,
    payload: 'payload',
  };

  const likeSuccessAction = {
    type: likeAccommodationCreateType.LIKE_ACCOMMODATION_CREATE_SUCCESS,
    payload: 'payload',
  };

  const likeInvalidAction = {
    type: 'INVALID',
  };

  it('should return loading True', () => {
    const reducer = LikeAccommodationCreateReducer(
      initialState,
      likeRequestAction
    );
    expect(reducer).toEqual({ loading: true });
  });

  it('should return loading false loading fail', () => {
    const reducer = LikeAccommodationCreateReducer(
      initialState,
      likeFailureAction
    );
    expect(reducer).toEqual({ loading: false, error: 'payload' });
  });

  it('should return loading false loading success', () => {
    const reducer = LikeAccommodationCreateReducer(
      initialState,
      likeSuccessAction
    );
    expect(reducer).toEqual({ loading: false, data: 'payload' });
  });

  it('should return loading false loading invalid', () => {
    const reducer = LikeAccommodationCreateReducer(
      initialState,
      likeInvalidAction
    );
    expect(reducer).toEqual({ loading: false });
  });
});
