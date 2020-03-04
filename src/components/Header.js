import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../actions";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Row,
  Col
} from 'reactstrap';

const Header = props => {
  return (
    <div>
      {props.user.id !== "" ? (
        <Nav className="header">
          <NavLink>
            <Link className="navlink" to={`/profile/${props.user.id}`}>
              Profile
            </Link>
          </NavLink>
          <NavLink>
            <Link to="/" onClick={props.logOut}>
              Log Out
              </Link>
          </NavLink>
        </Nav>
      ) : (
          <Nav className="header">
            <NavLink>
              <Link className="navlink" to="/registration">
                Sign Up
                </Link>
            </NavLink>
            <NavLink>
              <Link className="navlink" to="/">
                Login
              </Link>
            </NavLink>
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
