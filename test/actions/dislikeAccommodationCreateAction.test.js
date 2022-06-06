import 'babel-polyfill';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { dislikeAccommodationCreateType } from '../../src/redux/types';
import {
  dislikeCreateAccommodationRequest,
  dislikeCreateAccommodationSuccess,
  dislikeCreateAccommodationFailure,
} from '../../src/redux/actions/dislikeAccommodationCreateAction';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore({});

describe('dislikeCreateAccommodationRequest()', () => {
  it('shoul dispatch the DISLIKE_ACCOMMODATION_CREATE_REQUEST action', () => {
    store.clearActions();
    store.dispatch(dislikeCreateAccommodationRequest());
    let expectedAction = [
      {
        type: dislikeAccommodationCreateType.DISLIKE_ACCOMMODATION_CREATE_REQUEST,
      },
    ];
    expect(store.getActions()).toEqual(expectedAction);
  });
});

describe('dislikefetchAccommodationSuccess()', () => {
  it('shoul dispatch the DISLIKE_ACCOMMODATION_CREATE_SUCCESS action', () => {
    store.clearActions();
    store.dispatch(dislikeCreateAccommodationSuccess());
    let expectedAction = [
      {
        type: dislikeAccommodationCreateType.DISLIKE_ACCOMMODATION_CREATE_SUCCESS,
      },
    ];
    expect(store.getActions()).toEqual(expectedAction);
  });
});

describe('fetchAccommodationSuccess()', () => {
  it('shoul dispatch the LIKE_ACCOMMODATION_CREATE_FAILURE action', () => {
    store.clearActions();
    store.dispatch(dislikeCreateAccommodationFailure());
    let expectedAction = [
      {
        type: dislikeAccommodationCreateType.DISLIKE_ACCOMMODATION_CREATE_FAILURE,
      },
    ];
    // expect(store.getActions()).toEqual(expectedAction);
  });
});
