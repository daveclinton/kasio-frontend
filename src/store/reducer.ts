import { combineReducers } from "redux";
import reducers from "./translations/reducers";
import authReducer from "./auth/reducers";

const rootReducer = combineReducers({
  translates: reducers,
  authReducer,
});

export default rootReducer;
