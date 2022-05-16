import axios from "axios";
import { accommodationFetchType } from "../types";

export const fetchAccommodationRequest = () => {
	return {
		type: accommodationFetchType.ACCOMMODATION_FETCH_REQUEST
	}
}

export const fetchAccommodationSuccess = (data)=>{
	return {
		type: accommodationFetchType.ACCOMMODATION_FETCH_SUCCESS,
		payload: data
	}
}

export const fetchAccommodationFailure = (error) => {
	return {
		type: accommodationFetchType.ACCOMMODATION_FETCH_FAILURE,
		payload: error
	}

}

const API_URL ='https://elites-barefoot-nomad.herokuapp.com/api/v1/accommodations'

export const fetchAccommodations = () =>{
	return  (dispatch) => {
		dispatch(fetchAccommodationRequest())
		axios.get(API_URL
		).then(response=>{
			dispatch(fetchAccommodationSuccess(response.data))
		}).catch(error=>{
			dispatch(fetchAccommodationFailure(error))
		})
	}
}