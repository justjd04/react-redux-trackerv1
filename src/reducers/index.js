import { combineReducers } from "redux";
import candidatesReducer from "./candidatesReducer";
import validateReducer from "./validateReducer";

export default combineReducers({
  candidates: candidatesReducer,
  error: validateReducer,
});
