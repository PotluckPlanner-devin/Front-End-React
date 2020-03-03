const initialState = {
  user: {
    id: "",
    username: "",
    password: "",
    email: "",
    call: ""
  },
  events: [],
  event: {
    id: "",
    user_id: "",
    location: "",
    date: "",
    time: ""
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
          call: `/api/users/${action.payload.id}`
        }
      };
    case "GET_USER":
      return {
        ...state,
        user: {
          ...state.user,
          username: action.payload.username,
          email: action.payload.email,
          password: action.payload.password
        }
      };
    case "GET_EVENTS":
      return {
        ...state,
        events: action.payload
      };
    case "GET_EVENT":
      return {
        ...state,
        id: action.payload.id,
        user_id: action.payload.user_id,
        location: action.payload.location,
        date: action.payload.date,
        time: action.payload.time
      };
    default:
      return state;
  }
};
