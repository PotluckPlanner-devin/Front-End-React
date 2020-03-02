import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  // console.log(credentials);

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    axios
      .post(
        "https://potluckplanner-buildweek.herokuapp.com/api/authentication/login",
        credentials
      )
      .then(res => {
        console.log("Login Response", res);
      })
      .catch(err => console.log("Login Error", err));
  };

  return (
    <div>
      <form>
        <label>
          Username
          <input
            required
            id="username"
            name="username"
            type="text"
            value={credentials.username}
            onChange={handleChange}
            autoComplete="off"
          />
        </label>
        <label>
          Password
          <input
            required
            id="password"
            name="password"
            type="text"
            value={credentials.password}
            onChange={handleChange}
            autoComplete="off"
          />
        </label>
        <button type="submit" onClick={login}>
          Submit
        </button>
      </form>
      <p>
        Don't have an account? Sign up <Link to="/registration">here!</Link>
      </p>
    </div>
  );
};

export default Login;
