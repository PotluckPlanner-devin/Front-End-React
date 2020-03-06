const initialState = {
  isLoggedIn: false,
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
    time: "",
    potluckName: "",
    food: []
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        isLoggedIn: true,
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
          time: action.payload.time,
          potluckName: action.payload.potluckName
        }
      };
    case "EDIT_EVENT":
      return {
        ...state,
        event: {
          ...state.event,
          id: action.payload.id,
          user_id: action.payload.user_id,
          location: action.payload.location,
          date: action.payload.date,
          time: action.payload.time,
          potluckName: action.payload.potluckName
        }
      };
    case "GET_EVENT_FOOD":
      return {
        ...state,
        event: {
          ...state.event,
          food: action.payload
        }
      };
    case "LOG_OUT":
      return {
        ...initialState
      };
    default:
      return state;
  }
};
