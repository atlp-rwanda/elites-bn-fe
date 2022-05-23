import { actionTypes } from '../../src/redux/types';
import mostTravelledReducer from '../../src/redux/reducers/mostTravelledReducer';

const { GET_MOSTVISITEDLOCATION } = actionTypes;

describe('mostTravelledReducer(state,action)', () => {
  const initialState = {
    mostVisitedLocation: [],
    loading: true,
  };

  const setMostVisitedAction = { type: GET_MOSTVISITEDLOCATION, visitedLocations: 'payload' };
  const setInvalidAction = { type: 'invalid', visitedLocations: 'payload' };

  it('should return payload and loading', () => {
    const reducer = mostTravelledReducer(initialState, setMostVisitedAction);
    expect(reducer).toEqual({ loading: false, mostVisitedLocation: 'payload' });
  });

  it('should return invalid payload', () => {
    const reducer = mostTravelledReducer(initialState, setInvalidAction);
    expect(reducer).toEqual({ loading: true, mostVisitedLocation: [] });
  });
});
