import React from "react";
import useForm from "../hooks/useForm";
import validate from "../utils/validateRegister";
import axios from "axios";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

const Registration = props => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );

  function submit() {
    axios
      .post(
        "https://potluckplanner-buildweek.herokuapp.com/api/authentication/register",
        {
          username: values.username,
          email: values.email,
          password: values.password
        }
      )

      .then(response => {
        console.log("Registration Post response", response);
        props.history.push("/");
      })
      .catch(error => {
        console.log("Registration post error", error);
      });
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <Row>
        <Col md="4" sm="4" xs="4"></Col>
        <Col md="4" sm="4" xs="4">
          <FormGroup>
            <Label>Username</Label>
            <Input
              //className={`${errors.username && "inputError"}`}
              name="username"
              type="text"
              placeholder="username"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p className="error">{errors.username}</p>}
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input
              //className={`${errors.email && "inputError"}`}
              name="email"
              type="email"
              placeholder="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </FormGroup>

          <FormGroup>
            <Label>Password</Label>
            <Input
              //className={`${errors.password && "inputError"}`}
              name="password"
              type="password"
              placeholder="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Col>
        <Col md="4" sm="4" xs="4"></Col>
      </Row>
    </Form>
  );
};

export default Registration;
