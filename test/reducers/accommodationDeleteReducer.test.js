import AccommodationDeleteReducer from "../../src/redux/reducers/accommodationDeleteReducer"
import { accommodationDeleteType } from "../../src/redux/types"

describe('AccommodationDeleteReducer(state, action)', ()=>{


	const initialState = {
		loading: false,
		isDeleted: false,
	}

	const deleteRequestAction = {
		type: accommodationDeleteType.ACCOMMODATION_DELETE_REQUEST,
		payload: 'payload'
	}

	const deleteFailureAction = {
		type: accommodationDeleteType.ACCOMMODATION_DELETE_FAILURE,
		payload: 'payload'
	}

	const deleSuccessAction = {
		type: accommodationDeleteType.ACCOMMODATION_DELETE_SUCCESS,
		payload: 'payload'
	}

	const deleInvalidAction = {
		type: 'INVALID',
	}

	it('should return loading True',()=>{
        const reducer = AccommodationDeleteReducer(initialState, deleteRequestAction);
        expect(reducer).toEqual({loading: true, isDeleted: false,});
    })

	it('should return loading false loading fail',()=>{
        const reducer = AccommodationDeleteReducer(initialState, deleteFailureAction);
        expect(reducer).toEqual({loading: false, error: 'payload', isDeleted: false,});
    })

	it('should return loading false loading success',()=>{
        const reducer = AccommodationDeleteReducer(initialState, deleSuccessAction);
        expect(reducer).toEqual({loading: false, data: 'payload', isDeleted: true,});
    })

	it('should return loading false loading invalid',()=>{
        const reducer = AccommodationDeleteReducer(initialState, deleInvalidAction);
        expect(reducer).toEqual({loading: false, isDeleted: false,});
    })

})