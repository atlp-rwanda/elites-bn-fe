import axios from "axios";
import { accommodationCreateType } from "../types";
import { closeGlobalSnackBar, openGlobalSnackBar } from "./globalSnackBarActions";
export const createAccommodationRequest = () => {
	return {
		type: accommodationCreateType.ACCOMMODATION_CREATE_REQUEST
	}
}

export const createAccommodationSuccess = (data) => {
	return {
		type: accommodationCreateType.ACCOMMODATION_CREATE_SUCCESS,
		payload: data
	}
}

export const createAccommodationFailure = (error) => {
	return {
		type: accommodationCreateType.ACCOMMODATION_CREATE_FAILURE,
		payload: error
	}

}

export const createAccommodation = (accommodation) => {
	const API_URL = `https://elites-barefoot-nomad.herokuapp.com/api/v1/accommodations`
	console.log(accommodation);
	let formData = new FormData()
	formData.append('accommodationName', accommodation.accommodationName)
	formData.append('description', accommodation.description)
	formData.append('streetAddress', accommodation.streetAddress)
	formData.append('geoCoordinates', accommodation.geoCoordinates)
	formData.append('amenities', accommodation.ammenities)
	formData.append('images', accommodation.image)
	formData.append('locationId', accommodation.locationId)
	return async (dispatch) => {
		dispatch(createAccommodationRequest())
		await axios.post(API_URL,
			formData
			, {
				headers: {
					authorization: `Bearer ${JSON.parse(localStorage.getItem('userToken')).accesstoken}`,
					"Content-Type": "multipart/form-data",
				}
			}
		).then(response => {
			dispatch(openGlobalSnackBar({message:'Accommodation created successfull', severity: 'success'}))
			dispatch(createAccommodationSuccess(response.data))
		}).catch(error => {
			dispatch(openGlobalSnackBar({message:'Accommodation created fail', severity: 'error'}))
			dispatch(createAccommodationFailure(error))
			
		})
	}
}