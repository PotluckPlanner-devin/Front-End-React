import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getEvent } from "../actions";

// component imports
import HostEvent from "./HostEvent";
import GuestEvent from "./GuestEvent";

const Event = props => {
  const { id } = useParams();

  useEffect(() => {
    props.getEvent(id);
  }, []);

  return (
    <div>
      {props.user === props.event.user_id ? <HostEvent /> : <GuestEvent />}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user_id: state.user.id,
    event: state.event
  };
};

export default connect(mapStateToProps, { getEvent })(Event);
