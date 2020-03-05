import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";


const initialCredentials = {
  username: "",
  password: ""
};

const Login = props => {
  const [credentials, setCredentials] = useState(initialCredentials);

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
        window.localStorage.setItem("token", res.data.token);
        props.history.push(`/profile/${res.data.id}`);
      })
      .catch(err => console.log("Login Error", err));
    setCredentials(initialCredentials);
  };

  return (
    <Form>
      <Row>
        <Col md="4"></Col>
        <Col md="4">
        <FormGroup>
          <Label>Username</Label>
          <Input
            required
            id="username"
            name="username"
            type="text"
            value={credentials.username}
            onChange={handleChange}
            autoComplete="off"
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            required
            id="password"
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleChange}
            autoComplete="off"
          />
        </FormGroup>


        <Button type="submit" onClick={login}>
          Submit
        </Button>
        <p>Don't have an account? Sign up<Link to="/registration"> here!</Link></p>
        </Col>
        <Col md=""></Col>
        </Row>
    </Form>
      );
    };
    
    export default Login;
