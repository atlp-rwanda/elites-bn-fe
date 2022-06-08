import { LoginTypes } from "../types";

const initialState = {
  messageOpen: false,
  message: '',
};

const resetMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LoginTypes.OPEN_MESSAGE:
      return {
        ...state,
        messageOpen: true,
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default resetMessageReducer;
