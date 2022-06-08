import { LoginTypes } from '../types';

const initialState = {err: false};

export default function(state= initialState, action){
    const { type, payload } = action;
    switch(type) {
        case LoginTypes.RESET_LINK_SUCCESS:
            return {
                ...state,
            };

        case LoginTypes.RESET_LINK_FAIL:
            return {
                ...state,
                err: true
            };
        
        default:
            return state;               

    }
}