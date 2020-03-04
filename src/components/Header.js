import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../actions";
import { Nav } from 'reactstrap';

const Header = props => {
  return (
    <div>
      {props.user.id !== "" ? (
        <Nav className="header">
            <Link className="navlink" to={`/profile/${props.user.id}`}>
              Profile
            </Link>
            <Link to="/" onClick={props.logOut}>
              Log Out
              </Link>
        </Nav>
      ) : (
          <Nav className="header">
              <Link className="navlink" to="/registration">
                Sign Up
                </Link>
              <Link className="navlink" to="/">
                Login
              </Link>
          </Nav>
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
