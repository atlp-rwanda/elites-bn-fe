import { actionTypes }from '../../src/redux/types';
const { GET_LOCATIONS,GET_ACCOMMODATIONS } = actionTypes;
import { getLocations,getAccomodations } from '../../src/redux/actions/locationActions'
import "babel-polyfill";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
const middleware = [thunk];
const mockStore = configureStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore({});
describe("LOCATION AND ACCOMODATION TESTS",()=>{
  it("should get locations",()=>{
    store.clearActions();
    store.dispatch(getLocations())
    let expectedAction = [{ type:'GET_LOCATIONS'}]
    expect(store.getActions()).toEqual(expectedAction)
  })

  it("should get accomodations",()=>{
    store.clearActions();
    store.dispatch(getAccomodations())
    let expectedAction = [{ type:'GET_ACCOMMODATIONS'}]
    expect(store.getActions()).toEqual(expectedAction)
  })
})


