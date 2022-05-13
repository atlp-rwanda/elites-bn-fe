import { actionTypes }from '../../src/redux/types';
const {
  SET_STEP_ONE_REQUESTS,
  ADD_MULTICITY,
  SET_STEP_ONE_DEPART_DATE,
  SET_STEP_ONE_RETURN_DATE,
  SET_STEP_TWO_TRIP_REQUEST_REASON,
  SET_STEP_TWO_TRIP_REQUEST_REMEMBER_ME,
  INITIALIZE,
  UPDATE_TRIP_REQUEST,
} = actionTypes;

import { setStepOneRequests,setStepOneDepartDate,setStepOneReturnDate,setStepTwoTripRequestReason,setStepTwoTripRequestRememberMe,addMulticity,initialize,updateTripRequest } from '../../src/redux/actions/tripRequestActions'
import "babel-polyfill";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
const middleware = [thunk];
const mockStore = configureStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore({});

describe ("TRIP REQUEST TEST",()=>{
  it('should set step One Requests',()=>{
    store.clearActions();
    store.dispatch(setStepOneRequests())
    let expectedAction = [{ type:'SET_STEP_ONE_REQUESTS'}]
    expect(store.getActions()).toEqual(expectedAction)
  })

  it('should set step one depart date',()=>{
    store.clearActions();
    store.dispatch(setStepOneDepartDate())
    let expectedAction = [{ type:'SET_STEP_ONE_DEPART_DATE'}]
    expect(store.getActions()).toEqual(expectedAction)
  })

  it('should set step one return date',()=>{
    store.clearActions();
    store.dispatch(setStepOneReturnDate())
    let expectedAction = [{ type:'SET_STEP_ONE_RETURN_DATE'}]
    expect(store.getActions()).toEqual(expectedAction)
  })

  it('should set step two trip request reason',()=>{
    store.clearActions();
    store.dispatch(setStepTwoTripRequestReason())
    let expectedAction = [{ type:'SET_STEP_TWO_TRIP_REQUEST_REASON'}]
    expect(store.getActions()).toEqual(expectedAction)
  })

  it('should set step two trip request remember me ',()=>{
    store.clearActions();
    store.dispatch(setStepTwoTripRequestRememberMe())
    let expectedAction = [{ type:'SET_STEP_TWO_TRIP_REQUEST_REMEMBER_ME'}]
    expect(store.getActions()).toEqual(expectedAction)
  })

  it('should add multicity ',()=>{
    store.clearActions();
    store.dispatch(addMulticity())
    let expectedAction = [{ type:'ADD_MULTICITY'}]
    expect(store.getActions()).toEqual(expectedAction)
  })

  it('should initialize trip request ',()=>{
    store.clearActions();
    store.dispatch(initialize())
    let expectedAction = [{ type:'INITIALIZE'}]
    expect(store.getActions()).toEqual(expectedAction)
  })

  it('should update trip request ',()=>{
    store.clearActions();
    store.dispatch(updateTripRequest())
    let expectedAction = [{ type:'UPDATE_TRIP_REQUEST'}]
    expect(store.getActions()).toEqual(expectedAction)
  })
})