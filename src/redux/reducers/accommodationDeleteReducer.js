import { accommodationDeleteType } from "../types";

const initialState = {
	loading: false,
	isDeleted: false,
}

const AccommodationDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case accommodationDeleteType.ACCOMMODATION_DELETE_REQUEST:
			return {
				loading: true,
				isDeleted: false,
			}
	
		case accommodationDeleteType.ACCOMMODATION_DELETE_SUCCESS:
			return {
				loading:false,
				data: action.payload,
				isDeleted: true,
			}
		
		case accommodationDeleteType.ACCOMMODATION_DELETE_FAILURE:
			return{
				loading: false,
				error: action.payload,
				isDeleted: false,
			}

		default:
			return state;
	}
}

export default AccommodationDeleteReducer