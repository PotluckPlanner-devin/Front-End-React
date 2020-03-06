import React from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Button, ButtonToolbar } from "reactstrap";

const GuestEvent = props => {
  console.log("guest");
  console.log("guest props", props);
  const { id } = useParams();

  const bringFood = thisfood => {
    props.assignFood(id, thisfood);
    console.log("food test", thisfood);
  };

  //{item.isTaken === 0 ? className = "taken" : className="not-taken" }

  return (
    <div>
      <Row>
      <Col lg = "3" md = "2" xs = "2" ></Col>
      <Col lg = "8" md = "9" xs = "6" >
      <h1>{props.event.potluckName.toUpperCase()}</h1><br></br>
      <p>Location: {props.event.location}</p>
      <p>Date: {props.event.date}</p>
      <p>Time: {props.event.time}</p>
      <div>
        Food:
        {props.event.food.map(item => {
   
          return (
            <div className={item.isTaken === 0 ? "" : "food-taken"}>
              <Row>
              <Col lg = "9" md = "9">
              <Col lg = "9">
              <br></br><p>{item.foodName.toUpperCase()}</p>
              </Col>
            <ButtonToolbar>
              <Button color={item.isTaken === 0 ? "secondary" : "secondary"}
                      className={item.isTaken === 1 ? "primary-button" : "secondary-button"}
                      onClick={() => bringFood(item.foodName)} 
                      block 
              >
                {item.isTaken === 0 ? "Bring This Food" : "Food Already Taken"}
              </Button>
              </ButtonToolbar>
              </Col>
              </Row>
            </div>
          );
        })}
      </div>
      </Col>
      </Row>
    </div>
  );
};

export default GuestEvent;
