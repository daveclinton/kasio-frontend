import { combineReducers } from "redux";
import reducers from "./translations/reducers";

const rootReducer = combineReducers({
  translates: reducers,
});

export default rootReducer;
