import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

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
      <form onSubmit={handleSubmit}>
        <label>Event Name</label>
        <input
          name="potluckName"
          type="text"
          placeholder="name"
          value={addEvent.potluckName}
          onChange={handleChange}
          required
        />
        <label>Location</label>
        <input
          name="location"
          type="text"
          placeholder="location"
          value={addEvent.location}
          onChange={handleChange}
          required
        />
        <label>Event Date</label>
        <input
          name="date"
          type="date"
          placeholder="date"
          value={addEvent.date}
          onChange={handleChange}
        />
        <label>Event Time</label>
        <input
          name="time"
          type="time"
          placeholder="time"
          value={addEvent.time}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EventForm;
