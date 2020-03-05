import React from "react";
import { useParams } from "react-router-dom";

const GuestEvent = props => {
  console.log("guest");
  console.log("guest props", props);
  const { id } = useParams();

  const bringFood = thisfood => {
    props.assignFood(id, thisfood);
  };

  return (
    <div>
      <h1>{props.event.potluckName}</h1>
      <p>Location: {props.event.location}</p>
      <p>Date: {props.event.date}</p>
      <p>Time: {props.event.time}</p>
      <div>
        Food:
        {props.event.food.map(item => {
          return (
            <div>
              <p>{item.foodName}</p>
              <button onClick={() => bringFood(item.foodName)}>
                bring this food
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GuestEvent;
