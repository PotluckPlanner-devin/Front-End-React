import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getUser, getEvents } from "../actions";

// component imports
import EventCard from "./EventCard";

const Profile = props => {
  const { id } = useParams();

  useEffect(() => {
    props.getUser(id);
    props.getEvents();
  }, []);

  return (
    <div>
      <h2>{props.username}</h2>
      <div>
        {props.events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    username: state.user.username,
    events: state.events
  };
};

export default connect(mapStateToProps, { getUser, getEvents })(Profile);
