import axios from "axios";
import { accommodationDeleteType } from "../types";
import { showSuccessSnackbar } from "./snackbarActions";

export const deleteAccommodationRequest = () => {
	return {
		type: accommodationDeleteType.ACCOMMODATION_DELETE_REQUEST
	}
}

export const deleteAccommodationSuccess = (data)=>{
	return {
		type: accommodationDeleteType.ACCOMMODATION_DELETE_SUCCESS,
		payload: data
	}
}

export const deleteAccommodationFailure = (error) => {
	return {
		type: accommodationDeleteType.ACCOMMODATION_DELETE_FAILURE,
		payload: error
	}

}


export const deleteAccommodation = (id) =>{
	const API_URL =`https://elites-barefoot-nomad.herokuapp.com/api/v1/accommodations/${id}`
	return  async (dispatch) => {
		dispatch(deleteAccommodationRequest())
		await axios.delete(API_URL, {
			headers:{
				Authorization : `Bearer ${JSON.parse(localStorage.getItem('userToken')).accesstoken}`,
			}
		  }
		).then((response)=>{
			dispatch(deleteAccommodationSuccess(response.data))
		}).catch(error=>{
			dispatch(deleteAccommodationFailure(error))
		})
	}
}