import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../actions";

// create elements to be displayed when loged in
// create conditional statement for rendering components
// create logout function
const Header = props => {
  return (
    <div>
      {props.user.id !== "" ? (
        <div className="header">
          <Link className="navlink" to={`/profile/${props.user.id}`}>
            Profile
          </Link>
          <Link to="/" onClick={props.logOut}>
            Log Out
          </Link>
        </div>
      ) : (
        <div className="header">
          <Link className="navlink" to="/registration">
            Sign Up
          </Link>
          <Link className="navlink" to="/">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, { logOut })(Header);
