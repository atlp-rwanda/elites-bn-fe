import { actionTypes } from "../types";

const initialState = {
    users : [],
    loading: true
};

export default function ( state = initialState, action) {
    const { type, payload} = action

    switch (type) {
        case actionTypes.GET_USERS:
            return {
                ... state,
                users: payload.users,
                loading: false
            };

        case actionTypes.LOAD_USERS_FAIL:
            return {
                ...state,
                users: payload
            };
        
            default:
                return state;
    }
}
