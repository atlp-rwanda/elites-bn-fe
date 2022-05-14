import axios from 'axios'
import {
	USER_REGISTER_FAIRURE,
	USER_REGISTER_REQUEST, 
	USER_REGISTER_SUCCESS
} from '../types'

export const userRegisterRequest = () => {
	return {
		type: USER_REGISTER_REQUEST
	}
}

export const userRegisterSuccess = (data) => {
	return {
		type: USER_REGISTER_SUCCESS,
		payload: data
	}
}

export const userRegisterFailure = (error) => {
	return {
		type: USER_REGISTER_FAIRURE,
		payload: error
	}
}

const API_URL ='https://elites-barefoot-nomad.herokuapp.com/api/v1/users/register'

export const registerUser = ({names, email, password}) =>{
	return  (dispatch) => {
		dispatch(userRegisterRequest())
		axios.post(API_URL,{
			names,
			email,
			password
		}).then(response=>{
			dispatch(userRegisterSuccess(response.data))
		}).catch(error=>{
			dispatch(userRegisterFailure(error))
		})
	}
}