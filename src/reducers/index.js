const initialState = {
  user: {
    id: "",
    username: "",
    password: "",
    email: ""
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
    case "GET_USER":
      return {
        ...state,
        user: {
          ...state.user,
          id: action.payload.id,
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
        event: {
          ...state.event,
          id: action.payload.id,
          user_id: action.payload.user_id,
          location: action.payload.location,
          date: action.payload.date,
          time: action.payload.time
        }
      };
    case "LOG_OUT":
      return {
        ...state,
        state: initialState
      };
    default:
      return state;
  }
};
