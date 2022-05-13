import { actionTypes } from '../types';

const { GET_LOCATIONS,GET_ACCOMMODATIONS } = actionTypes;

const initialState = {
  locations:[],
  accomodations:[],
  loading: true,
}

export default function(
state = initialState,
action){
switch(action.type){
  case GET_LOCATIONS:
    return {
      ...state,
      locations:
      action.payload,
      loading:false,
      };

  case GET_ACCOMMODATIONS:
        return {
          ...state,
          accomodations:
          action.payload,
          loading:false,
          };
   default:
     return state;
 }
}