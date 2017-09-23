//** Redux Data Flow **//

import {createStore, combineReducers} from "redux";

//Multiple Reducer

// Reducer 1
const mathReducer = (state = {
    result: 1,
    lastValue: []
  }, action) => {
  switch (action.type) {
    case "ADD": // copy current state and return modified state
      state = {
          ...state,
          result: state.result + action.payload, // Object
          lastValue: [...state.lastValue, action.payload] // Array
      };
      break;
    case "SUBTRACT":
      state = {
          ...state,
          result: state.result - action.payload,
          lastValue: [...state.lastValue, action.payload]
      };
      break;
  }
  return state;
};

// Reducer 2
const userReducer = (state = {
    name: "Amit",
    age: 27
  }, action) => {
  switch (action.type) {
    case "SET_NAME": // copy current state and return modified state
      state = {
          ...state,
          name: action.payload
      };
      break;
    case "SET_AGE":
      state = {
          ...state,
          age: action.payload
        };
      break;
  }
  return state;
};

// create store with combine reducer
const store = createStore(
  combineReducers({mathReducer, userReducer}),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Fire when store updated
store.subscribe(() => {
  console.log("Store updated!", store.getState());
});

// Dispatch action is a JavaScript Object
store.dispatch({
    type: "ADD",
    payload: 20
});

store.dispatch({
    type: "SUBTRACT",
    payload: 10
});

store.dispatch({
    type: "SET_AGE",
    payload: 30
})
