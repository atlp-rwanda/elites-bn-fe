import { accommodationReviewType } from "../types"

const initialState = {
	loading: false,
}

const AccommodationReviewCreateReducer = (state = initialState, action) => {
	switch (action.type) {
		case accommodationReviewType.ACCOMMODATION_REVIEW_REQUEST:
			return {
				loading: true
			}
	
		case accommodationReviewType.ACCOMMODATION_REVIEW_SUCCESS:
			return {
				loading:false,
				data: action.payload
			}
		
		case accommodationReviewType.ACCOMMODATION_REVIEW_FAILURE:
			return{
				loading: false,
				error: action.payload
			}

		default:
			return state;
	}
}

export default AccommodationReviewCreateReducer