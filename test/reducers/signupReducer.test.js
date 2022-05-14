import signupReducer from "../../src/redux/reducers/signupReducer";
import { USER_REGISTER_FAIRURE, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../../src/redux/types";

describe('loginReduce(state, action)', ()=>{


	const initialState = {
		loading: false,
	}

	const registerRequestAction = {
		type: USER_REGISTER_REQUEST,
		payload: 'payload'
	}

	const registerFailureAction = {
		type: USER_REGISTER_FAIRURE,
		payload: 'payload'
	}

	const registerSuccessAction = {
		type: USER_REGISTER_SUCCESS,
		payload: 'payload'
	}

	const registerInvalidAction = {
		type: 'INVALID',
	}

	it('should return loading True',()=>{
        const reducer = signupReducer(initialState, registerRequestAction);
        expect(reducer).toEqual({loading: true});
    })

	it('should return loading false loading fail',()=>{
        const reducer = signupReducer(initialState, registerFailureAction);
        expect(reducer).toEqual({loading: false, error: 'payload'});
    })

	it('should return loading false loading success',()=>{
        const reducer = signupReducer(initialState, registerSuccessAction);
        expect(reducer).toEqual({loading: false, data: 'payload'});
    })

	it('should return loading false loading invalid',()=>{
        const reducer = signupReducer(initialState, registerInvalidAction);
        expect(reducer).toEqual({loading: false,});
    })

})