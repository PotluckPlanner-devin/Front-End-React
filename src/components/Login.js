import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { authenticate } from "../actions";

const initialCredentials = {
  username: "",
  password: ""
};

const Login = props => {
  const [credentials, setCredentials] = useState(initialCredentials);

  // console.log(credentials);

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    props.authenticate(credentials, props);
    setCredentials(initialCredentials);
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

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, { authenticate })(Login);
