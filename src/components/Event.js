import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getEvent, editEvent, getEventFood } from "../actions";
import { axiosWithAuth } from "../utils/axiosWithAuth";

// component imports
import HostEvent from "./HostEvent";
import GuestEvent from "./GuestEvent";

const Event = props => {
  const [bool, setBool] = useState(false);
  const { id } = useParams();
  console.log(id);

  const deleteFood = (id, food) => {
    console.log(id);
    console.log(food);
    axiosWithAuth()
      .delete(`/api/food/${id}`, { data: { foodName: food } })
      .then(res => {
        console.log("Delete Food Response", res);
      })
      .catch(err => console.log("Delete Food Error", err));
  };

  const addFood = (id, food) => {
    axiosWithAuth()
      .post(`/api/food/${id}`, { foodName: food })
      .then(res => {
        console.log("Add Food Response", res);
      })
      .catch(err => console.log("Add Food Error", err));
  };

  const assignFood = (id, food) => {
    axiosWithAuth()
      .post(`/api/food/${id}/isTaken`, { foodName: food })
      .then(res => {
        console.log("Assign Food Response", res);
        setBool(!bool);
      })
      .catch(err => console.log("Assign Food Error", err));
  };

  useEffect(() => {
    props.getEvent(id);
    props.getEventFood(id);
  }, [bool]);

  return (
    <div>
      {props.event.location === "" ? (
        <div>Loading...</div>
      ) : (
        <div>
          {props.user_id === props.event.user_id ? (
            <HostEvent
              editEvent={props.editEvent}
              event={props.event}
              deleteFood={deleteFood}
              addFood={addFood}
              setBool={setBool}
              assignFood={assignFood}
            />
          ) : (
            <GuestEvent event={props.event} assignFood={assignFood} />
          )}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user_id: state.user.id,
    event: state.event
  };
};

export default connect(mapStateToProps, {
  getEvent,
  editEvent,
  getEventFood
})(Event);
