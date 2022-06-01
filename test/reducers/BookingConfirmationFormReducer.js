import bookingConfirmationReducer from '../../src/redux/reducers/bookingConfirmationReducer';
import { bookingConfirmationCreateType } from '../../src/redux/types';

describe('AccommodationCreateReducer(state, action)', () => {
  const initialState = {
    loading: false,
  };

  const createRequestAction = {
    type: bookingConfirmationCreateType.BOOKING_CONFIRMATION_CREATE,
    payload: 'payload',
  };

  const createFailureAction = {
    type: bookingConfirmationCreateType.BOOKING_CONFIRMATION_FETCH_FAILURE,
    payload: 'payload',
  };

  const createSuccessAction = {
    type: bookingConfirmationCreateType.BOOKING_CONFIRMATION_SUCCESS,
    payload: 'payload',
  };

  const createnvalidAction = {
    type: 'INVALID',
  };

  it('should return loading True', () => {
    const reducer = bookingConfirmationReducer(
      initialState,
      createRequestAction
    );
    expect(reducer).toEqual({ loading: true });
  });

  it('should return loading false loading fail', () => {
    const reducer = bookingConfirmationReducer(
      initialState,
      createFailureAction
    );
    expect(reducer).toEqual({ loading: false, error: 'payload' });
  });

  it('should return loading false loading success', () => {
    const reducer = bookingConfirmationReducer(
      initialState,
      createSuccessAction
    );
    expect(reducer).toEqual({ loading: false, data: 'payload' });
  });

  it('should return loading false loading invalid', () => {
    const reducer = bookingConfirmationReducer(
      initialState,
      createnvalidAction
    );
    expect(reducer).toEqual({ loading: false });
  });
});
