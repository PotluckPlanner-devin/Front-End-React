import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Button, Label, Input, Form } from "reactstrap";

const HostEvent = props => {
  console.log("host");
  console.log("host props", props);
  const [editing, setEditing] = useState(false);
  const [event, setEvent] = useState(props.event);
  const [food, setFood] = useState("");
  console.log(event);

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
          <Col>
          <div>
            <h1>{props.event.potluckName}</h1>
            <p>Location: {props.event.location}</p>
            <p>Date: {props.event.date}</p>
            <p>Time: {props.event.time}</p>
          </div>
          {editing === true ? (
            <Form onSubmit={submitEdit}>
              <Label>
                Name (Not editable)
                <Input
                  name="name"
                  type="text"
                  onChange={handleChange}
                  value={event.potluckName}
                  placeholder="New Name"
                />
              </Label>
              <Label>
                Location
                <Input
                  name="location"
                  type="text"
                  onChange={handleChange}
                  value={event.location}
                  placeholder="New Location"
                />
              </Label>
              <Label>
                Date
                <Input
                  name="date"
                  type="date"
                  onChange={handleChange}
                  value={event.date}
                  placeholder="New Date"
                />
              </Label>
              <Label>
                Time
                <Input
                  name="time"
                  type="time"
                  onChange={handleChange}
                  value={event.time}
                  placeholder="New Time"
                />
              </Label>
              <Button color = "primary" type="submit" onClick={submitEdit}>
                Submit
              </Button>
            </Form>
          ) : (
            ""
          )}
          <Button color = "primary" onClick={toggleEdit}>
            {editing === true ? "Cancel Edit" : "Edit Event"}
          </Button>
          <div>
            Food:
            {props.event.food.map(item => {
              return (
                <div>
                  <p>{item.foodName}</p>
                  <Button color = "primary" onClick={() => deleteThisFood(item.foodName)}>
                    x
                  </Button>
                  <Button color = {item.isTaken === 0 ? "primary" : "secondary"} onClick={() => bringFood(item.foodName)}>
                    {item.isTaken === 0 ? "Bring This Food" : "Food Already Taken"}
                  </Button>
                </div>
              );
            })}
            <Form onSubmit={submitFood}>
              <Label>
                <Input
                  name="foodName"
                  type="text"
                  onChange={handleFoodChange}
                  value={food}
                  placeholder="Add Food"
                />
              </Label>
              <Button type="submit">Add Food</Button>
            </Form>
          </div>
          </Col>
        </div>
      )}
    </>
  );
};

export default HostEvent;
