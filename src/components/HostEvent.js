import React from "react";
import { connect } from "react-redux";

// display event info
// add edit button
// edit button displays edit form
// add edit event action creator and cooresponding reducer
const HostEvent = props => {
  console.log(props);
  return <div>Host Event!</div>;
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, {})(HostEvent);
