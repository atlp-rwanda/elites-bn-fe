import "babel-polyfill"
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { accommodationDeleteType } from "../../src/redux/types";
import { deleteAccommodation, deleteAccommodationFailure, deleteAccommodationRequest, deleteAccommodationSuccess } from "../../src/redux/actions/accommodationDeleteActions";

const middleware = [thunk];
const mockStore = configureStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore({});

describe('deleteAccommodationRequest()', ()=>{
	it('shoul dispatch the ACCOMMODATION_FETCH_REQUEST action', ()=>{
		store.clearActions();
		store.dispatch(deleteAccommodationRequest())
		let expectedAction = [{type: accommodationDeleteType.ACCOMMODATION_DELETE_REQUEST}]
		expect(store.getActions()).toEqual(expectedAction);
	})
})

describe('deleteAccommodationSuccess()', ()=>{
	it('shoul dispatch the ACCOMMODATION_DELETE_SUCCESS action', ()=>{
		store.clearActions();
		store.dispatch(deleteAccommodationSuccess())
		let expectedAction = [{type: accommodationDeleteType.ACCOMMODATION_DELETE_SUCCESS}]
		expect(store.getActions()).toEqual(expectedAction);
	})
})

describe('deleteAccommodationFailure()', ()=>{
	it('shoul dispatch the ACCOMMODATION_DELETE_FAILURE action', ()=>{
		store.clearActions();
		store.dispatch(deleteAccommodationFailure())
		let expectedAction = [{type: accommodationDeleteType.ACCOMMODATION_DELETE_FAILURE}]
		expect(store.getActions()).toEqual(expectedAction);
	})
})
