import { SET_AUTH_USER, CLEAR_AUTH_STORE } from "./types";

interface User {
  name: string;
  email: string;
}

interface AuthAction {
  type: string;
  payload: User;
}

const initialState = {
  user: null,
};

const authReducer = (state = initialState, action: AuthAction) => {
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
