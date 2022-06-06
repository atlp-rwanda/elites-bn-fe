import DislikeAccommodationCreateReducer from '../../src/redux/reducers/dislikeAccommodationCreateReducer';
import { dislikeAccommodationCreateType } from '../../src/redux/types';

describe('DislikeAccommodationCreateReducer(state, action)', () => {
  const initialState = {
    loading: false,
  };

  const dislikeRequestAction = {
    type: dislikeAccommodationCreateType.DISLIKE_ACCOMMODATION_CREATE_REQUEST,
    payload: 'payload',
  };

  const dislikeFailureAction = {
    type: dislikeAccommodationCreateType.DISLIKE_ACCOMMODATION_CREATE_FAILURE,
    payload: 'payload',
  };

  const dislikeSuccessAction = {
    type: dislikeAccommodationCreateType.DISLIKE_ACCOMMODATION_CREATE_SUCCESS,
    payload: 'payload',
  };

  const dislikeInvalidAction = {
    type: 'INVALID',
  };

  it('should return loading True', () => {
    const reducer = DislikeAccommodationCreateReducer(
      initialState,
      dislikeRequestAction
    );
    expect(reducer).toEqual({ loading: true });
  });

  it('should return loading false loading fail', () => {
    const reducer = DislikeAccommodationCreateReducer(
      initialState,
      dislikeFailureAction
    );
    expect(reducer).toEqual({ loading: false, error: 'payload' });
  });

  it('should return loading false loading success', () => {
    const reducer = DislikeAccommodationCreateReducer(
      initialState,
      dislikeSuccessAction
    );
    expect(reducer).toEqual({ loading: false, data: 'payload' });
  });
  it('should return loading false loading invalid', () => {
    const reducer = DislikeAccommodationCreateReducer(
      initialState,
      dislikeInvalidAction
    );
    expect(reducer).toEqual({ loading: false });
  });
});
