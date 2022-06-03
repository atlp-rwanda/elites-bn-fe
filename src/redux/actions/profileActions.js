import { actionTypes }from '../types';
const { FETCH_PROFILE,SET_GENDER,SET_DEPARTMENT,SET_BIRTHDATE,SET_CURRENCY,SET_LANGUAGE,SET_PROFILE_IMAGE,SET_ADDRESS,SET_PASSPORT,SET_RESIDENCE,INITIALIZE_PROFILE } = actionTypes;
export const fetchedProfile = (profile)=>({
 type:FETCH_PROFILE,
 payload:profile,
})

export const setGender = (gender)=>({
  type:SET_GENDER,
  payload:gender,
})

export const setDepartment = (department)=>({
  type:SET_DEPARTMENT,
  payload:department,
})

export const setBirthdate = (birthdate)=>({
  type:SET_BIRTHDATE,
  payload:birthdate,
})

export const setCurrency = (currency)=>({
  type:SET_CURRENCY,
  payload:currency,
})

export const setLanguage = (language)=>({
  type:SET_LANGUAGE,
  payload:language,
})

export const setProfileImage =  (image)=>({
  type:SET_PROFILE_IMAGE,
  payload: image,
})

export const setAddress = (address)=>({
  type:SET_ADDRESS,
  payload:address,
})

export const setPassport = (passport)=>({
  type:SET_PASSPORT,
  payload:passport,
})

export const setResidence = (residence)=>({
  type:SET_RESIDENCE,
  payload:residence,
})

export const initialize = () => ({
  type:INITIALIZE_PROFILE,
})