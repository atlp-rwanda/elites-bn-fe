import { actionTypes } from '../../src/redux/types';
const { GET_LOCATIONS,GET_ACCOMMODATIONS } = actionTypes;
import locationReducer from '../../src/redux/reducers/allLocationsReducer';

describe("LOCATIONS REDUCER TESTS",()=>{

  const initialState = {
    locations:[],
    accomodations:[],
    loading: true,
  }

  const getLocationsAction = {
    type: GET_LOCATIONS,
    payload: 'payload'
    }

    const getAccomodationsAction = {
      type: GET_ACCOMMODATIONS,
      payload: 'payload'
      }
  
it ("should fetch locations",()=>{
   const reducer = locationReducer(initialState, getLocationsAction);
   console.log(reducer,'myReducer')
   expect(reducer).toEqual({locations:'payload', loading:false,accomodations:[],})
})
it ("should fetch accomodations",()=>{
  const reducer = locationReducer(initialState, getAccomodationsAction);
  expect(reducer).toEqual({accomodations:'payload', loading:false,locations:[]})
})
})