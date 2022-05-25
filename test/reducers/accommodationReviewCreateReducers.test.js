import AccommodationReviewCreateReducer from "../../src/redux/reducers/accommodationCreateReviewReducer";
import { accommodationReviewType } from "../../src/redux/types";

describe('AccommodationReviewCreateReducer(state, action)', ()=>{


	const initialState = {
		loading: false,
	}

	const reviewRequestAction = {
		type: accommodationReviewType.ACCOMMODATION_REVIEW_REQUEST,
		payload: 'payload'
	}

	const reviewFailureAction = {
		type: accommodationReviewType.ACCOMMODATION_REVIEW_FAILURE,
		payload: 'payload'
	}

	const reviewSuccessAction = {
		type: accommodationReviewType.ACCOMMODATION_REVIEW_SUCCESS,
		payload: 'payload'
	}

	const reviewInvalidAction = {
		type: 'INVALID',
	}

	it('should return loading True',()=>{
        const reducer = AccommodationReviewCreateReducer(initialState, reviewRequestAction);
        expect(reducer).toEqual({loading: true});
    })

	it('should return loading false loading fail',()=>{
        const reducer = AccommodationReviewCreateReducer(initialState, reviewFailureAction);
        expect(reducer).toEqual({loading: false, error: 'payload'});
    })

	it('should return loading false loading success',()=>{
        const reducer = AccommodationReviewCreateReducer(initialState, reviewSuccessAction);
        expect(reducer).toEqual({loading: false, data: 'payload'});
    })

	it('should return loading false loading invalid',()=>{
        const reducer = AccommodationReviewCreateReducer(initialState, reviewInvalidAction);
        expect(reducer).toEqual({loading: false,});
    })

})