import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// create elements to be displayed when loged in
// create conditional statement for rendering components
// create logout function
const Header = props => {
  return (
    <div className="header">
      {/* {props.user.id !== "" ? (
        <Link className="navlink" to={`/profile/${props.user.id}`}>Profile</Link>
        <button onClick={logOut}>Log Out</button>
      )} */}
      <Link className="navlink" to="/registration">
        Sign Up
      </Link>
      <Link className="navlink" to="/">
        Login
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, {})(Header);
