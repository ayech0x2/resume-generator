import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

const logger = createLogger({
  collapsed: true,
  colors: {
    title: () => "#0B698F",
    prevState: () => "#7286E9",
    action: () => "#bd2839",
    nextState: () => "#1DB954",
    error: () => "#FF534D",
  },
});
let store: any = null;

store = createStore(reducers, applyMiddleware(thunk,logger));

export default store;
