import axios from "axios";
import { accommodationReviewType } from "../types";
import { closeGlobalSnackBar, openGlobalSnackBar } from "./globalSnackBarActions";

export const createAccommodationRevewRequest = () => {
	return {
		type: accommodationReviewType.ACCOMMODATION_REVIEW_REQUEST
	}
}

export const createAccommodationReviewSuccess = (data) => {
	return {
		type: accommodationReviewType.ACCOMMODATION_REVIEW_SUCCESS,
		payload: data
	}
}

export const createAccommodationReviewFailure = (error) => {
	return {
		type: accommodationReviewType.ACCOMMODATION_REVIEW_FAILURE,
		payload: error
	}

}

export const createAccommodationReview = (accommodationId,review) => {
	const API_URL = `https://elites-barefoot-nomad.herokuapp.com/api/v1/accommodations/${accommodationId}/reviews`
	return async (dispatch) => {
		dispatch(createAccommodationRevewRequest())
		await axios.post(API_URL,
			review
			, {
				headers: {
					authorization: `Bearer ${JSON.parse(localStorage.getItem('userToken')).accesstoken}`
				}
			}
		).then(response => {
			dispatch(openGlobalSnackBar({message:'Review send successfull', severity: 'success'}))
			dispatch(createAccommodationReviewSuccess(response.data))
		}).catch(error => {
			dispatch(openGlobalSnackBar({message:'Review send fail', severity: 'error'}))
			dispatch(createAccommodationReviewFailure(error))
		})
	}
}