import { actionTypes } from "../types"
const { FETCH_PROFILE,SET_GENDER,SET_DEPARTMENT,SET_BIRTHDATE,SET_CURRENCY,SET_LANGUAGE,SET_PROFILE_IMAGE, SET_ADDRESS,SET_PASSPORT,SET_RESIDENCE,INITIALIZE_PROFILE} = actionTypes

const initialState = {
  
}

export default function (state = initialState, action){
  switch(action.type){
    case FETCH_PROFILE:
      return action.payload
      

    case SET_GENDER:
      return {
        ...state,
       gender: action.payload
      };

    case SET_DEPARTMENT:
      return {
        ...state,
        department:action.payload
      };

    case SET_BIRTHDATE:
      return {
        ...state,
        birthdate:action.payload
      }; 
    
    case SET_CURRENCY:
      return {
        ...state,
        currency:action.payload
      };
      
    case SET_LANGUAGE:
      return {
        ...state,
        language:action.payload
      };  
    case SET_PROFILE_IMAGE:
       return {
        ...state,
          image:action.payload
        };  
    case SET_ADDRESS :
      return {
      ...state,
      address:action.payload
     }
    case SET_PASSPORT :
      return {
       ...state,
       passportNumber:action.payload
     }        
    case SET_RESIDENCE :
     return {
      ...state,
      residence:action.payload
    }

    case INITIALIZE_PROFILE :
      return initialState

    default:
      return state
  }
}