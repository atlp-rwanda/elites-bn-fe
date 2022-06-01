import { accommodationCreateType } from '../types';

const initialState = {
  loading: true,
};

const AccommodationCreateReducer = (state = initialState, action) => {
  switch (action.type) {
    case accommodationCreateType.ACCOMMODATION_CREATE_REQUEST:
      return {
        loading: true,
      };

    case accommodationCreateType.ACCOMMODATION_CREATE_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };

    case accommodationCreateType.ACCOMMODATION_CREATE_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default AccommodationCreateReducer;
