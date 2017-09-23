// Reducer 1

const initialState = {
    result: 1,
    lastValue: []
};

function mathReducer(state = initialState,  action) {
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

export default mathReducer;
