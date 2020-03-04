import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const EventForm = () => {
    const { id } = useParams();
        const [addEvent, setAddEvent] = useState({
            user_id: id,
            location: '',
            date: '',
            time: ''
        })
    
        const handleChange = event => {
            setAddEvent({
                ...addEvent,
                [event.target.name]: event.target.value
            })
        }

        const handleSubmit = event => {
            event.preventDefault();
            axiosWithAuth()
                .post('/api/potluck', addEvent)
                .then(response => {
                    console.log("eventPostResponse", response)
                })
                .catch(error => {
                    console.log(error);
                });
        }
    
        return (
            <div>
                <form onSubmit={handleSubmit}>
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