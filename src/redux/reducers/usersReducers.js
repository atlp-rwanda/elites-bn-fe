import { actionTypes } from "../types";

const initialState = {
    users : [],
    roles: [],
    loading: true,
    updated: false
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
        case actionTypes.SET_ROLES:
            return {
                ...state,
                roles: payload.roles
            }
        case actionTypes.FAILED_TO_LOAD_ROLES:
            return {
                ...state,
                roles: payload
            }
        
        case actionTypes.UPDATE_ROLE:
            return {
                ...state,
                updated: true
            }

        case actionTypes.FAILED_TO_UPDATE:
            return {
                ...state,
                updated: false
            }
        
            default:
                return state;
    }
}
