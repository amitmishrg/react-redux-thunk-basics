// Reducer 2

const initialState = {
    name: "Amit Mishra",
    age: 27
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_NAME_FULFILLED": // copy current state and return modified state
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

export default userReducer;
