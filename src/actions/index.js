import { axiosWithAuth } from "../utils/axiosWithAuth";

export const getUser = id => dispatch => {
  axiosWithAuth()
    .get(`/api/users/${id}`)
    .then(res => {
      console.log("User Response", res);
      dispatch({ type: "GET_USER", payload: res.data });
    })
    .catch(err => console.log("Get User Error", err));
};

export const getEvents = () => dispatch => {
  axiosWithAuth()
    .get("/api/potluck/")
    .then(res => {
      console.log("Get Events Response", res);
      dispatch({ type: "GET_EVENTS", payload: res.data });
    })
    .catch(err => console.log(err));
};

export const getEvent = id => dispatch => {
  axiosWithAuth()
    .get(`/api/potluck/${id}`)
    .then(res => {
      console.log("Get Event Response", res);
      dispatch({ type: "GET_EVENT", payload: res.data });
    })
    .catch(err => console.log("Get Event Error", err));
};

export const logOut = () => dispatch => {
  window.localStorage.removeItem("token");
  dispatch({ type: "LOG_OUT" });
};

export const editEvent = (id, event) => dispatch => {
  axiosWithAuth()
    .put(`/api/potluck/${id}`, event)
    .then(res => {
      console.log("Event Put Response", res);
      dispatch({ type: "EDIT_EVENT", payload: event });
    })
    .catch(err => console.log("Event Put Error", err));
};

export const getEventFood = id => dispatch => {
  axiosWithAuth()
    .get(`/api/food/${id}`)
    .then(res => {
      console.log("Get Event Food Response", res);
      dispatch({ type: "GET_EVENT_FOOD", payload: res.data });
    })
    .catch(err => console.log("Get Event Food Error", err));
};
