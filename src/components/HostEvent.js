import React, { useState } from "react";
import { useParams } from "react-router-dom";

const HostEvent = props => {
  console.log("host");
  console.log("host props", props);
  const [editing, setEditing] = useState(false);
  const [event, setEvent] = useState(props.event);
  const [food, setFood] = useState("");

  const { id } = useParams();

  const toggleEdit = () => {
    setEditing(!editing);
  };

  const handleFoodChange = e => {
    setFood(e.target.value);
  };

  const handleChange = e => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value
    });
  };

  const submitFood = e => {
    e.preventDefault();
    props.addFood(id, food);
    props.setBool(bool => !bool);
    setFood("");
  };

  const deleteThisFood = thisFood => {
    props.deleteFood(id, thisFood);
    props.setBool(bool => !bool);
  };

  const submitEdit = e => {
    e.preventDefault();
    props.editEvent(id, event);
    setEditing(!editing);
  };

  const bringFood = thisFood => {
    props.assignFood(id, thisFood);
  };

  return (
    <>
      {event.location === "" ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div>
            <h1>{props.event.potluckName}</h1>
            <p>Location: {props.event.location}</p>
            <p>Date: {props.event.date}</p>
            <p>Time: {props.event.time}</p>
          </div>
          {editing === true ? (
            <form onSubmit={submitEdit}>
              <label>
                Name
                <input
                  name="name"
                  type="text"
                  onChange={handleChange}
                  value={event.potluckName}
                  placeholder="New Name"
                />
              </label>
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
                  type="date"
                  onChange={handleChange}
                  value={event.date}
                  placeholder="New Date"
                />
              </label>
              <label>
                Time
                <input
                  name="time"
                  type="time"
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
          <div>
            Food:
            {props.event.food.map(item => {
              return (
                <div>
                  <p>{item.foodName}</p>
                  <button onClick={() => deleteThisFood(item.foodName)}>
                    x
                  </button>
                  <button onClick={() => bringFood(item.foodName)}>
                    bring this food
                  </button>
                </div>
              );
            })}
            <form onSubmit={submitFood}>
              <label>
                <input
                  name="foodName"
                  type="text"
                  onChange={handleFoodChange}
                  value={food}
                  placeholder="Add Food"
                />
              </label>
              <button type="submit">Add Food</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default HostEvent;
