import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const authenticate = (credentials, props) => dispatch => {
  axios
    .post(
      "https://potluckplanner-buildweek.herokuapp.com/api/authentication/login",
      credentials
    )
    .then(res => {
      console.log("Login Response", res);
      dispatch({ type: "AUTHENTICATE", payload: res.data });
      window.localStorage.setItem("token", res.data.token);
      props.history.push(`/profile/${res.data.id}`);
    })
    .catch(err => console.log("Login Error", err));
};

export const getUser = call => dispatch => {
  axiosWithAuth()
    .get(call)
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
      console.log("Events Response", res);
    })
    .catch(err => console.log(err));
};
