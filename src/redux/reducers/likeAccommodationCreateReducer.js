import { likeAccommodationCreateType } from '../types';

const initialState = {
  loading: false,
};

const LikeAccommodationCreateReducer = (state = initialState, action) => {
  switch (action.type) {
    case likeAccommodationCreateType.LIKE_ACCOMMODATION_CREATE_REQUEST:
      return {
        loading: true,
      };

    case likeAccommodationCreateType.LIKE_ACCOMMODATION_CREATE_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };

    case likeAccommodationCreateType.LIKE_ACCOMMODATION_CREATE_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default LikeAccommodationCreateReducer;
