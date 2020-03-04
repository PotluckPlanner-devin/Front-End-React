import React from "react";
import { useParams } from "react-router-dom";

const GuestEvent = ({ event, assignFood }) => {
  const { id } = useParams();

  const bringFood = e => {
    e.preventDefault();
    console.log(e.target.foodName);
    assignFood(id, e.target.foodName);
  };

  return (
    <div>
      <h1>Event Name Here</h1>
      <p>Location: {event.location}</p>
      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      <div>
        Food:
        {event.food.map(item => {
          return (
            <div>
              <p>{item.foodName}</p>
              <button onClick={bringFood}>bring this food</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GuestEvent;
