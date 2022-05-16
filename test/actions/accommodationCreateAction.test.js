import "babel-polyfill"
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { accommodationCreateType } from "../../src/redux/types";
import { createAccommodation, createAccommodationFailure, createAccommodationRequest, createAccommodationSuccess } from "../../src/redux/actions/accommodationCreateActions";

const middleware = [thunk];
const mockStore = configureStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore({});

describe('createAccommodationRequest()', () => {
	it('shoul dispatch the ACCOMMODATION_CREATE_REQUEST action', () => {
		store.clearActions();
		store.dispatch(createAccommodationRequest())
		let expectedAction = [{ type: accommodationCreateType.ACCOMMODATION_CREATE_REQUEST }]
		expect(store.getActions()).toEqual(expectedAction);
	})
})

describe('createAccommodationFailure()', () => {
	it('shoul dispatch the ACCOMMODATION_CREATE_FAILURE action', () => {
		store.clearActions();
		store.dispatch(createAccommodationFailure())
		let expectedAction = [{ type: accommodationCreateType.ACCOMMODATION_CREATE_FAILURE }]
		expect(store.getActions()).toEqual(expectedAction);
	})
})

describe('createAccommodationSuccess()', () => {
	it('shoul dispatch the createAccommodationSuccess action', () => {
		store.clearActions();
		store.dispatch(createAccommodationSuccess())
		let expectedAction = [{ type: accommodationCreateType.ACCOMMODATION_CREATE_SUCCESS }]
		expect(store.getActions()).toEqual(expectedAction);
	})
})
