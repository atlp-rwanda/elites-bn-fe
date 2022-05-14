import "babel-polyfill"
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { userRegisterFailure, userRegisterRequest, userRegisterSuccess, registerUser } from "../../src/redux/actions/signupActions";
import { USER_REGISTER_FAIRURE, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../../src/redux/types";
import { async } from "regenerator-runtime";
import { waitFor } from "@testing-library/react";
const middleware = [thunk];
const mockStore = configureStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore({});

const API_URL =
	'https://elites-barefoot-nomad.herokuapp.com/api/v1/users/register';

describe('registerUser(user)', () => {

	it('dispatches USER_REGISTER_SUCCESS after signup', async () => {
		store.clearActions();
		const userData = {
			names: 'USER',
			email: `USER${new Date().getMilliseconds()}@gmail.com`,
			password: 'Password123',
		};

		await store.dispatch(registerUser(userData));

	})
})

describe('registerUser(user)', () => {

	it('dispatches USER_REGISTER_FAIRURE after signup', async () => {
		store.clearActions();
		const userData = {
			names: 'USER',
			email: `niyongaboaristide17@gmail.com`,
			password: 'Password123',
		};

		await store.dispatch(registerUser(userData));

	})
})

describe('userRegisterSuccess() action', () => {
	it('should dispatch the USER_REGISTER_SUCCESS action', () => {
		store.clearActions();
		store.dispatch(userRegisterSuccess())
		let expectedAction = [{ type: USER_REGISTER_SUCCESS }];
		expect(store.getActions()).toEqual(expectedAction);
	})
})

describe('userRegisterRequest() action', () => {
	it('should dispatch the USER_REGISTER_REQUEST action', () => {
		store.clearActions();
		store.dispatch(userRegisterRequest())
		let expectedAction = [{ type: USER_REGISTER_REQUEST }];
		expect(store.getActions()).toEqual(expectedAction);
	})
})

describe('userRegisterRequest() action', () => {
	it('should dispatch the USER_REGISTER_REQUEST action', () => {
		store.clearActions();
		store.dispatch(userRegisterRequest())
		let expectedAction = [{ type: USER_REGISTER_REQUEST }];
		expect(store.getActions()).toEqual(expectedAction);
	})
})

describe('userRegisterFailure() action', () => {
	it('should dispatch the USER_REGISTER_FAIRURE action', () => {
		store.clearActions();
		store.dispatch(userRegisterFailure())
		let expectedAction = [{ type: USER_REGISTER_FAIRURE }];
		expect(store.getActions()).toEqual(expectedAction);
	})
})