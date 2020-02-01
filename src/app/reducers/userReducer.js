const userReducer = (state = {
  username:"Luis",
  age:28
}, action) => {
  switch (action.type) {
     case "SET_NAME_FULFILLED":
        state = {
          ...state,
          username: action.payload,
        };
      break;
    case "SET_AGE":
        state = {
          ...state,
          age: action.payload,
        };
      break;
  }
  return state;
};

export default userReducer;
