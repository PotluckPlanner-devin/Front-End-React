import React from "react";
import { Link } from "react-router-dom";
import { Card, CardTitle, CardBody, CardSubtitle, Button } from "reactstrap";

// display event info
const EventCard = props => {
  console.log("eventcardprops", props);
  return (

    <Card>
      <CardBody>
          <CardTitle>Event Name: {props.event.potluckName }</CardTitle>
          <CardSubtitle>Date: {props.event.date}</CardSubtitle>
          <Button className= "second-button">
          <Link to={`/event/${props.event.id}`}>View Details</Link>
          </Button>
      </CardBody>
    </Card>
  );
};

export default EventCard;
