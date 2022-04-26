import { actionTypes } from "../types";

const initialState = {}

export default function(state= initialState, action){
    const { type, payload } = action;
    switch(type) {
        case actionTypes.GET_CHATS:
            return {
                ...state,
                chats: payload.chats
            };

        case actionTypes.FAILED_TO_LOAD_CHATS:
            return {
                ...state,
                chats: payload
            };
        
            default:
                return state;
                

    }
}