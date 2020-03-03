import React from "react";
import { connect } from "react-redux";

// display event info

const GuestEvent = props => {
  console.log(props);
  return <div>Guest Event!</div>;
};

const mapStateToProps = state => {
  return {
    user: state.event
  };
};

export default connect(mapStateToProps, {})(GuestEvent);
