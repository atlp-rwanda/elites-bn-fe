import { accommodationUpdateType } from "../types"

const initialState = {
	loading: false,
	isUpdate: false
}

const AccommodationUpdateReducer = (state = initialState, action) => {
	switch (action.type) {
		case accommodationUpdateType.ACCOMMODATION_UPDATE_REQUEST:
			return {
				loading: true,
				isUpdate: false
			}
	
		case accommodationUpdateType.ACCOMMODATION_UPDATE_SUCCESS:
			return {
				loading:false,
				data: action.payload,
				isUpdate: true
			}
		
		case accommodationUpdateType.ACCOMMODATION_UPDATE_FAILURE:
			return{
				loading: false,
				error: action.payload,
				isUpdate: false
			}

		default:
			return state;
	}
}

export default AccommodationUpdateReducer