import "babel-polyfill"
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { accommodationFetchType } from "../../src/redux/types";
import { fetchAccommodationFailure, fetchAccommodationRequest, fetchAccommodations, fetchAccommodationSuccess } from "../../src/redux/actions/accommodationListActions";

const middleware = [thunk];
const mockStore = configureStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore({});

describe('fetchAccommodationRequest()', ()=>{
	it('shoul dispatch the ACCOMMODATION_FETCH_REQUEST action', ()=>{
		store.clearActions();
		store.dispatch(fetchAccommodationRequest())
		let expectedAction = [{type: accommodationFetchType.ACCOMMODATION_FETCH_REQUEST}]
		expect(store.getActions()).toEqual(expectedAction);
	})
})

describe('fetchAccommodationSuccess()', ()=>{
	it('shoul dispatch the ACCOMMODATION_FETCH_SUCCESS action', ()=>{
		store.clearActions();
		store.dispatch(fetchAccommodationSuccess())
		let expectedAction = [{type: accommodationFetchType.ACCOMMODATION_FETCH_SUCCESS}]
		expect(store.getActions()).toEqual(expectedAction);
	})
})

describe('fetchAccommodationSuccess()', ()=>{
	it('shoul dispatch the ACCOMMODATION_FETCH_FAILURE action', ()=>{
		store.clearActions();
		store.dispatch(fetchAccommodationFailure())
		let expectedAction = [{type: accommodationFetchType.ACCOMMODATION_FETCH_FAILURE}]
		expect(store.getActions()).toEqual(expectedAction);
	})
})

describe('fetchAccommodation()', ()=>{
	it('should dispatch ACCOMMODATION_FETCH_SUCCESS action after request done', async ()=>{
		await store.clearActions();
		await store.dispatch(fetchAccommodations())
	})
})