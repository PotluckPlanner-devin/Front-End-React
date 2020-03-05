import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Col, Row, Button, Form, Label, Input } from "reactstrap";

const EventForm = props => {
  const { id } = useParams();
  const initialEvent = {
    potluckName: "",
    user_id: id,
    location: "",
    date: "",
    time: ""
  };
  const [addEvent, setAddEvent] = useState(initialEvent);

  const handleChange = event => {
    setAddEvent({
      ...addEvent,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .post("/api/potluck", addEvent)
      .then(response => {
        console.log("eventPostResponse", response);
        props.setBool(bool => !bool);
      })
      .catch(error => {
        console.log(error);
      });
    setAddEvent(initialEvent);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Label>Event Name</Label>
        <Input
          name="potluckName"
          type="text"
          placeholder="name"
          value={addEvent.potluckName}
          onChange={handleChange}
          required
        />
        <Label>Location</Label>
        <Input
          name="location"
          type="text"
          placeholder="location"
          value={addEvent.location}
          onChange={handleChange}
          required
        />
        <Label>Event Date</Label>
        <Input
          name="date"
          type="date"
          placeholder="date"
          value={addEvent.date}
          onChange={handleChange}
        />
        <Label>Event Time</Label>
        <Input
          name="time"
          type="time"
          placeholder="time"
          value={addEvent.time}
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default EventForm;
