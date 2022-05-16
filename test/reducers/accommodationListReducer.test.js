import AccommodationListReducer from "../../src/redux/reducers/accommodationListReducer";
import { accommodationFetchType } from "../../src/redux/types";

describe('AccommodationListReducer(state, action)', ()=>{


	const initialState = {
		loading: false,
	}

	const fetchRequestAction = {
		type: accommodationFetchType.ACCOMMODATION_FETCH_REQUEST,
		payload: 'payload'
	}

	const fetchFailureAction = {
		type: accommodationFetchType.ACCOMMODATION_FETCH_FAILURE,
		payload: 'payload'
	}

	const fetchSuccessAction = {
		type: accommodationFetchType.ACCOMMODATION_FETCH_SUCCESS,
		payload: 'payload'
	}

	const fetchInvalidAction = {
		type: 'INVALID',
	}

	it('should return loading True',()=>{
        const reducer = AccommodationListReducer(initialState, fetchRequestAction);
        expect(reducer).toEqual({loading: true});
    })

	it('should return loading false loading fail',()=>{
        const reducer = AccommodationListReducer(initialState, fetchFailureAction);
        expect(reducer).toEqual({loading: false, error: 'payload'});
    })

	it('should return loading false loading success',()=>{
        const reducer = AccommodationListReducer(initialState, fetchSuccessAction);
        expect(reducer).toEqual({loading: false, data: 'payload'});
    })

	it('should return loading false loading invalid',()=>{
        const reducer = AccommodationListReducer(initialState, fetchInvalidAction);
        expect(reducer).toEqual({loading: false,});
    })

})