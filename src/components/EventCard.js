import React from "react";
import { Link } from "react-router-dom";
import { Card, CardTitle, CardBody, CardSubtitle } from "reactstrap";

// display event info
const EventCard = props => {
  console.log("eventcardprops", props);
  return (
    <Card>
      <CardBody>
          <CardTitle>Event ID: {props.event.id}</CardTitle>
          <CardSubtitle>Date: {props.event.date}</CardSubtitle>
          <Link to={`/event/${props.event.id}`}>View Details</Link>
      </CardBody>
    </Card>
  );
};

export default EventCard;
