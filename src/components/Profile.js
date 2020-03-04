import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getUser, getEvents } from "../actions";

// component imports
import EventCard from "./EventCard";
import EventForm from "./EventForm";

const Profile = props => {
  const { id } = useParams();
  const [ adding, setAdding ] = useState(false);

  const toggleForm = e => {
    e.preventDefault();
    setAdding(!adding);
  }

  useEffect(() => {
    props.getUser(id);
    props.getEvents();
  }, []);

  return (
    <div>
      <h2>{props.username}</h2>
      <div>
        {props.events.map(event => (
          <EventCard event={event} />
        ))}
      </div>
      <button onClick = {toggleForm}>Add a Potluck</button>
      <div>
        {adding === true ? <EventForm id = {id}/> : ""}
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
