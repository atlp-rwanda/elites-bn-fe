import axios from "axios";
import { accommodationUpdateType } from "../types";

export const updateAccommodationRequest = () => {
	return {
		type: accommodationUpdateType.ACCOMMODATION_UPDATE_REQUEST
	}
}

export const updateAccommodationSuccess = (data)=>{
	return {
		type: accommodationUpdateType.ACCOMMODATION_UPDATE_SUCCESS,
		payload: data
	}
}

export const updateAccommodationFailure = (error) => {
	return {
		type: accommodationUpdateType.ACCOMMODATION_UPDATE_FAILURE,
		payload: error
	}

}


export const updateAccommodation = (id,accommodation) =>{
	const API_URL =`https://elites-barefoot-nomad.herokuapp.com/api/v1/accommodations/${id}`
	const formData = new FormData()
	if(accommodation.locationId){
		formData.append('locationId', accommodation.locationId)
	} 
	if(accommodation.accommodationName){
		formData.append('accommodationName', accommodation.accommodationName)
	}
	if(accommodation.description){
		formData.append('description', accommodation.description)
	}
	if(accommodation.amenities){
		formData.append('amenities', accommodation.amenities)
	}
	if(accommodation.geoCoordinates){
		formData.append('geoCoordinates', accommodation.geoCoordinates)
	}
	if(accommodation.streetAddress){
		formData.append('streetAddress', accommodation.streetAddress)
	}
	return  async (dispatch) => {
		dispatch(updateAccommodationRequest())
		await axios.patch(API_URL, formData,{
			headers:{
				Authorization : `Bearer ${JSON.parse(localStorage.getItem('userToken')).accesstoken}`,
				"Content-Type": "multipart/form-data",
			}
		  }
		).then(response=>{
			dispatch(updateAccommodationSuccess(response.data))
		}).catch(error=>{
			dispatch(updateAccommodationFailure(error))
		})
	}
}