import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";

// custom  Middleware function
const myLogger = (store) => (next) => (action) => {
  console.log("Logged Action: ", action);
  next(action);
};

// create store with combine reducer
const store = createStore(
  combineReducers({
    math,
    user
  }), // combine reducer
  {},
  applyMiddleware(myLogger, createLogger(), thunk, promise()), // custom Middleware and logger Middleware
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Fire when store updated
store.subscribe(() => {
  console.log("Store updated!", store.getState());
});

export default store;
