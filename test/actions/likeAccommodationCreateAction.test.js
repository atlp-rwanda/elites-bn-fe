import 'babel-polyfill';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { likeAccommodationCreateType } from '../../src/redux/types';
import {
  likeCreateAccommodationRequest,
  likeCreateAccommodationSuccess,
  likeCreateAccommodationFailure,
} from '../../src/redux/actions/likeAccommodationCreateActions';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore({});

describe('createAccommodationRequest()', () => {
  it('shoul dispatch the LIKE_ACCOMMODATION_CREATE_REQUEST action', () => {
    store.clearActions();
    store.dispatch(likeCreateAccommodationRequest());
    let expectedAction = [
      { type: likeAccommodationCreateType.LIKE_ACCOMMODATION_CREATE_REQUEST },
    ];
    expect(store.getActions()).toEqual(expectedAction);
  });
});

describe('fetchAccommodationSuccess()', () => {
  it('shoul dispatch the LIKE_ACCOMMODATION_CREATE_SUCCESS action', () => {
    store.clearActions();
    store.dispatch(likeCreateAccommodationSuccess());
    let expectedAction = [
      { type: likeAccommodationCreateType.LIKE_ACCOMMODATION_CREATE_SUCCESS },
    ];
    expect(store.getActions()).toEqual(expectedAction);
  });
});

describe('fetchAccommodationSuccess()', () => {
  it('shoul dispatch the LIKE_ACCOMMODATION_CREATE_FAILURE action', () => {
    store.clearActions();
    store.dispatch(likeCreateAccommodationFailure());
    let expectedAction = [
      {
        type: likeCreateAccommodationFailure.LIKE_ACCOMMODATION_CREATE_FAILURE,
      },
    ];
    // expect(store.getActions()).toEqual(expectedAction);
  });
});
