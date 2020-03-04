import React from "react";
import useForm from "../hooks/useForm";
import validate from "../utils/validateRegister";
import axios from "axios";

const Registration = () => {
  const { 
    handleChange, 
    handleSubmit, 
    values, 
    errors } = useForm( submit, validate );

  function submit() {

    axios.post(
      "https://potluckplanner-buildweek.herokuapp.com/api/authentication/register",
      {
        username: values.username,
        email: values.email,
        password: values.password
      }
    )
    .then(response => {
      console.log("Registration Post response", response);
    })
    .catch(error => {
      console.log("Registration post error", error);
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Username</label>
          <div>
            <input
              className={`${errors.username && "inputError"}`}
              name="username"
              type="text"
              placeholder="username"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p className="error">{errors.username}</p>}
          </div>
        </div>
        <div>
          <label>Email</label>
          <div>
            <input
              className={`${errors.email && "inputError"}`}
              name="email"
              type="email"
              placeholder="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <input
              className={`${errors.password && "inputError"}`}
              name="password"
              type="password"
              placeholder="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Registration;