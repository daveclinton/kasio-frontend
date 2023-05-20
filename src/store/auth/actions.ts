import { SET_AUTH_USER, CLEAR_AUTH_STORE } from "./types";

export const setUser = (user: unknown) => {
  return {
    type: SET_AUTH_USER,
    payload: user,
  };
};

export const clearUser = () => {
  return {
    type: CLEAR_AUTH_STORE,
  };
};
