import { LoginTypes } from '../types';

const initialState = {}

export default function(state= initialState, action){
    const { type, payload } = action;
    switch(type) {
        case LoginTypes.RESET_LINK_SUCCESS:
            return {
                ...state,
                token: payload
            };

        case LoginTypes.RESET_LINK_FAIL:
            return {
                ...state,
                error: payload
            };

        case LoginTypes.RESET_PASSWORD_SUCCESS:
                return {
                    ...state,
                    messsage: payload
                };
    
        case LoginTypes.RESET_PASSWORD_FAIL:
                return {
                    ...state,
                    message: payload
                };
        
            default:
                return state;               

    }
}