const initialState = {
  user: {
    id: "",
    username: "",
    password: "",
    email: "",
    call: ""
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTHENTICATE":
      return {
        ...state,
        user: {
          ...state.user,
          id: action.payload.id,
          call: `https://potluckplanner-buildweek.herokuapp.com/api/users/${action.payload.id}`
        }
      };
    default:
      return state;
  }
};
