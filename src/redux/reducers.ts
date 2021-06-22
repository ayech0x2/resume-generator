import { combineReducers } from "redux";
import { mainReducer } from "./mainReducer";

const RootReducer = combineReducers({
  mainReducer,
});

export default RootReducer;
export type RootState = ReturnType<typeof RootReducer>;
