import {
	USER_REGISTER_FAIRURE,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS
} from "../types";

const initialState = {
	loading: false,
}

const signupReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_REGISTER_REQUEST:
			return {
				loading: true
			}
	
		case USER_REGISTER_SUCCESS:
			return {
				loading:false,
				data: action.payload
			}
		
		case USER_REGISTER_FAIRURE:
			return{
				loading: false,
				error: action.payload
			}

		default:
			return state;
	}
}

export default signupReducer