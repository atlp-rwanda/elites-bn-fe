import { LoginTypes } from "../types";

const initialState = {openDialog:false}

export default function (state= initialState, action){
    const { type, payload } = action;
    switch(type) {
        case LoginTypes.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                messsage: payload,
                openDialog: true,
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
