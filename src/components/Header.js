import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../actions";
import { Col, Row, Nav, Media, Navbar, NavItem } from "reactstrap";
import NavLogo from "../img/LogoPoshPotluck.png";

const Header = (props) => {
  console.log("header props", props);
  return (
    <div>
      {props.isLoggedIn ? (
        <Navbar className="nav-container">
          <Col></Col>
          <Col>
            <Nav className="header">
              <Col>
                <Media object src={NavLogo} alt="potluck-logo" />
              </Col>
              <Col className="nav-bar-links">
                <Link className="navlink" to={`/profile/${props.user.id}`}>
                  Profile
                </Link>
                <Link to="/" onClick={props.logOut}>
                  Log Out
                </Link>
              </Col>
            </Nav>
          </Col>
          <Col></Col>
        </Navbar>
      ) : (
        <Navbar className="nav-container">
          <Col></Col>
          <Col>
            <Nav className="header">
              <Col>
                <Media object src={NavLogo} alt="potluck-logo" />
              </Col>
              <Col className="nav-bar-links">
                <Link className="navlink" to="/registration">
                  Sign Up
                </Link>
                <Link className="navlink" to="/">
                  Login
                </Link>
              </Col>
            </Nav>
          </Col>
          <Col></Col>
        </Navbar>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    user: state.user,
  };
};

export default connect(mapStateToProps, { logOut })(Header);
