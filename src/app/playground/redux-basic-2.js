//** Redux Data Flow **//

import {createStore} from "redux";

const initiaState = {
  result: 1,
  lastValue: [],
  userName: "Amit"
}

//Reducer take your action
const reducer = (state = initiaState, action) => {
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

// create store with reducer and redux devtool for debugging
const store = createStore(
  reducer,
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
})
