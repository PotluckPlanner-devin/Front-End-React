import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getUser, getEvents } from "../actions";
import { Col, Row, Button } from "reactstrap";

// component imports
import EventCard from "./EventCard";
import EventForm from "./EventForm";

const Profile = props => {
  const { id } = useParams();
  const [bool, setBool] = useState(false);
  const [adding, setAdding] = useState(false);

  const toggleForm = e => {
    e.preventDefault();
    setAdding(!adding);
  };

  useEffect(() => {
    props.getUser(id);
    props.getEvents();
  }, [bool]);

  return (
    <Row className="profile-page-card-container">
      <Col></Col>
      <Col>
        <div>
          <h2 className="profile-welcome-text">Welcome {props.username}</h2>
          <div>
            {props.events.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <Button onClick={toggleForm} block>
            Add a Potluck
          </Button>
          <div>
            {adding === true ? <EventForm id={id} setBool={setBool} /> : ""}
          </div>
        </div>
      </Col>
      <Col></Col>
    </Row>
  );
};

const mapStateToProps = state => {
  return {
    username: state.user.username,
    events: state.events
  };
};

export default connect(mapStateToProps, { getUser, getEvents })(Profile);
