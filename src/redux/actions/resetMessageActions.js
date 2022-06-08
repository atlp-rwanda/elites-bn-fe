import { LoginTypes } from "../types";

export const resetMessage = (message) => ({
  type: LoginTypes.OPEN_MESSAGE,
  payload: message,
});