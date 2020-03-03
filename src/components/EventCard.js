import React from "react";
import { Link } from "react-router-dom";

// display event info
const EventCard = props => {
  console.log(props);
  return (
    <div>
      <Link to={`/event/${props.event.id}`}>Go to Potluck</Link>
    </div>
  );
};

export default EventCard;
