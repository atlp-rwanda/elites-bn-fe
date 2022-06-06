import { dislikeAccommodationCreateType } from '../types';

const initialState = {
  loading: false,
};

const DislikeAccommodationCreateReducer = (state = initialState, action) => {
  switch (action.type) {
    case dislikeAccommodationCreateType.DISLIKE_ACCOMMODATION_CREATE_REQUEST:
      return {
        loading: true,
      };

    case dislikeAccommodationCreateType.DISLIKE_ACCOMMODATION_CREATE_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };

    case dislikeAccommodationCreateType.DISLIKE_ACCOMMODATION_CREATE_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default DislikeAccommodationCreateReducer;
