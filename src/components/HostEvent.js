import React, { useState } from "react";
import { useParams } from "react-router-dom";

const HostEvent = props => {
  const [editing, setEditing] = useState(false);
  const [event, setEvent] = useState({
    user_id: props.event.user_id,
    location: props.event.location,
    date: props.event.date,
    time: props.event.time
  });
  const { id } = useParams();
  console.log(id);

  const toggleEdit = () => {
    setEditing(!editing);
  };

  const handleChange = e => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value
    });
  };

  const submitEdit = e => {
    e.preventDefault();
    props.editEvent(id, event);
    setEditing(!editing);
  };

  return (
    <>
      {event.location === "" ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div>
            <h1>Event Name Here</h1>
            <p>Location: {props.event.location}</p>
            <p>Date: {props.event.date}</p>
            <p>Time: {props.event.time}</p>
            <p>FOODS ELEMENT HERE?</p>
          </div>
          {editing === true ? (
            <form onSubmit={submitEdit}>
              {/* <label>
            Name
            <input
              name="name"
              type="text"
              onChange={handleChange}
              value="Event Name"
            />
          </label> */}
              <label>
                Location
                <input
                  name="location"
                  type="text"
                  onChange={handleChange}
                  value={event.location}
                  placeholder="New Location"
                />
              </label>
              <label>
                Date
                <input
                  name="date"
                  type="text"
                  onChange={handleChange}
                  value={event.date}
                  placeholder="New Date"
                />
              </label>
              <label>
                Time
                <input
                  name="time"
                  type="text"
                  onChange={handleChange}
                  value={event.time}
                  placeholder="New Time"
                />
              </label>
              <button type="submit" onClick={submitEdit}>
                Submit
              </button>
            </form>
          ) : (
            ""
          )}
          <button onClick={toggleEdit}>
            {editing === true ? "Cancel Edit" : "Edit Event"}
          </button>
        </div>
      )}
    </>
  );
};

export default HostEvent;
