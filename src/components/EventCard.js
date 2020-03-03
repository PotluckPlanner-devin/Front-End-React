import React from "react";
import { Link } from "react-router-dom";

// display event info
const EventCard = props => {
  console.log("eventcardprops", props);
  return (
    <div>
      <p>Event ID: {props.event.id}</p>
      <p>Date: {props.event.date}</p>
      <Link to={`/event/${props.event.id}`}>Go to Potluck</Link>
    </div>
  );
};

export default EventCard;
