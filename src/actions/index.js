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
    .catch(err => console.log(err));
};

export const logOut = () => {
  return { type: "LOG_OUT" };
};
