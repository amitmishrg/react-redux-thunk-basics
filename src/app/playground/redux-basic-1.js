
//** Redux Data Flow **//

import {createStore} from "redux";

//Reducer take your action
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD": // copy current state and return modified state
      state = Object.assign({}, state, { payload: action.payload })
        break;
    case "SUBTRACT":
      state = Object.assign({}, state, { payload: action.payload })
        break;
  }
  return state;
};

const initiaState = {
  name: "Amit",
  payload: 1
}

// create store with reducer, initiaState and redux devtool for debugging
const store = createStore(
  reducer,
  initiaState,
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
