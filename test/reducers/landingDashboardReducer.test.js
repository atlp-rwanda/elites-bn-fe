import { actionTypes } from '../../src/redux/types';
import landingDashboardReducers from '../../src/redux/reducers/landingDashboardReducers';

const { SET_TRIPSTATISTICS } = actionTypes;

describe('landingDashboardReducers(state,action)', () => {
  const initialState = {
    tripStatistics: [],
    loading: true,
  };

  const setTripStaticsAction = { type: SET_TRIPSTATISTICS, payload: 'payload' };
  const setInvalidAction = { type: 'invalid', payload: 'payload' };

  it('should return payload and loading', () => {
    const reducer = landingDashboardReducers(initialState, setTripStaticsAction);
    expect(reducer).toEqual({ loading: false, tripStatistics: 'payload' });
  });

  it('should return invalid payload', () => {
    const reducer = landingDashboardReducers(initialState, setInvalidAction);
    expect(reducer).toEqual({ loading: true, tripStatistics: [] });
  });
});
