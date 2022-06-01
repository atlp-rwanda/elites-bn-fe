import { accommodationFetchType } from '../types';

const initialState = {
  loading: true,
};

const AccommodationListReducer = (state = initialState, action) => {
  switch (action.type) {
    case accommodationFetchType.ACCOMMODATION_FETCH_REQUEST:
      return {
        loading: true,
      };

    case accommodationFetchType.ACCOMMODATION_FETCH_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };

    case accommodationFetchType.ACCOMMODATION_FETCH_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default AccommodationListReducer;
