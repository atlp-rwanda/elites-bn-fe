import {
  FETCH_PROFILE,
  SET_GENDER,
  SET_DEPARTMENT,
  SET_BIRTHDATE,
  SET_CURRENCY,
  SET_LANGUAGE,
  SET_PROFILE_IMAGE,
} from '../../src/redux/types';
import { fetchedProfile,setGender,setDepartment,setBirthdate,setCurrency,setLanguage,setProfileImage }from '../../src/redux/actions/profileActions'

import profileReducer from '../../src/redux/reducers/profileReducer';

describe('PROFILE DETAILS REDUCER', () => {
  const initialState = {
    //  gender:'Male',
    //  department:'Sales'
  };

  const fetchProfileActions = {
    type: FETCH_PROFILE,
    payload: 'payload',
  };

  const setDepartmentActions = {
    type: SET_DEPARTMENT,
    payload: 'payload',
  };

  const setBirthDateActions = {
    type: SET_BIRTHDATE,
    payload: 'payload',
  };

  const setCurrencyActions = {
    type: SET_CURRENCY,
    payload: 'payload',
  };

  const setLanguageActions = {
    type: SET_LANGUAGE,
    payload: 'payload',
  };

  const setProfileImageActions = {
    type: SET_PROFILE_IMAGE,
    payload: 'payload',
  };
  const setGenderActions = {
    type: SET_GENDER,
    payload: 'payload',
  };
  it('should fetch profile', () => {
    const reducer = profileReducer(initialState, fetchedProfile('payload'));
    expect(reducer).toEqual('payload');
  });

  it ('should set gender',()=>{
    const reducer = profileReducer(initialState,setGender('payload'))
    expect (reducer).toEqual({
      gender:'payload',
    });

  })

  it ('should set department',()=>{
    const reducer = profileReducer(initialState,setDepartment('payload'))
    expect (reducer).toEqual({
      department:'payload',});
  })
  

  it ('should set department',()=>{
    const reducer = profileReducer(initialState,setBirthdate('payload'))
    expect (reducer).toEqual({
     birthdate:'payload'
    });
  })


  it ('should set department',()=>{
    const reducer = profileReducer(initialState,setCurrency('payload'))
    expect (reducer).toEqual({
     currency:'payload'
    });
  })


  it ('should set department',()=>{
    const reducer = profileReducer(initialState,setLanguage('payload'))
    expect (reducer).toEqual({
     language:'payload'
    });
  })

  it ('should set department',()=>{
    const reducer = profileReducer(initialState,setProfileImage('payload'))
    expect (reducer).toEqual({
     image:'payload'
    });
  })

});
