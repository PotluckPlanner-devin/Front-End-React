import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUser, getEvents } from "../actions";

const Profile = props => {
  useEffect(() => {
    props.getUser(props.call);
    props.getEvents();
  }, []);

  return (
    <div>
      <h2>{props.username}</h2>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    call: state.user.call,
    username: state.user.username
  };
};

export default connect(mapStateToProps, { getUser, getEvents })(Profile);
