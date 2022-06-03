 import { actionTypes }from '../../src/redux/types';
// const { FETCH_PROFILE,SET_GENDER,SET_DEPARTMENT,SET_BIRTHDATE,SET_CURRENCY,SET_LANGUAGE,SET_PROFILE_IMAGE } = actionTypes

import { fetchedProfile,setGender,setDepartment,setBirthdate,setCurrency,setLanguage,setProfileImage } from '../../src/redux/actions/profileActions'
import "babel-polyfill";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
const middleware = [thunk];
const mockStore = configureStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore({});
describe("PROFILE ACTIONS TEST",()=>{
  it ('should fetch profile',()=>{
    store.clearActions();
    store.dispatch(fetchedProfile());
    let expectedAction = [{type:'FETCH_PROFILE'}];
    expect(store.getActions()).toEqual(expectedAction);
  })

  it ('should fetch profile',()=>{
    store.clearActions();
    store.dispatch(fetchedProfile());
    let expectedAction = [{type:'FETCH_PROFILE'}];
    expect(store.getActions()).toEqual(expectedAction);
  })

  it ('should set gender',()=>{
    store.clearActions();
    store.dispatch(setGender());
    let expectedAction = [{type:'SET_GENDER'}];
    expect(store.getActions()).toEqual(expectedAction);
  })

  it ('should set department',()=>{
    store.clearActions();
    store.dispatch(setDepartment());
    let expectedAction = [{type:'SET_DEPARTMENT'}];
    expect(store.getActions()).toEqual(expectedAction);
  })

  it ('should set birthdate',()=>{
    store.clearActions();
    store.dispatch(setBirthdate());
    let expectedAction = [{type:'SET_BIRTHDATE'}];
    expect(store.getActions()).toEqual(expectedAction);
  })

  it ('should fset currency',()=>{
    store.clearActions();
    store.dispatch(setCurrency());
    let expectedAction = [{type:'SET_CURRENCY'}];
    expect(store.getActions()).toEqual(expectedAction);
  })

  it ('should set language',()=>{
    store.clearActions();
    store.dispatch(setLanguage());
    let expectedAction = [{type:'SET_LANGUAGE'}];
    expect(store.getActions()).toEqual(expectedAction);
  })

  it ('should set profile image',()=>{
    store.clearActions();
    store.dispatch(setProfileImage());
    let expectedAction = [{type:'SET_IMAGE'}];
    expect(store.getActions()).toEqual(expectedAction);
  })
})