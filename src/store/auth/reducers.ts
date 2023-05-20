import { SET_AUTH_USER, CLEAR_AUTH_STORE } from "./types";

const initialState = {
  user: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_AUTH_USER:
      return {
        ...state,
        user: action.payload,
      };
    case CLEAR_AUTH_STORE:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
