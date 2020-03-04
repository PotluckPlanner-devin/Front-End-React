import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { withFormik, Form, Field } from "formik"; 
import * as Yup from "yup";

function EventForm ({ errors, touched, status }) {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        console.log('Status has changed!', status);
        status && setEvents(events => [...events, status])
    }, [status]);

    return (
        <div className="container">
            <Form>
                <label htmlFor="userID">User ID</label>
                {touched.user_id && errors.user_id && <span style={{ color: "red"}}>{errors.user_id}</span>}
                <Field
                    type="text"
                    name="user_id"
                    value={EventForm.user_id}
                />

                <label htmlFor="location">Event Location</label>
                {touched.location && errors.location && <span style={{ color: "red"}}>{errors.location}</span>}
                <Field
                    type="text"
                    name="location"
                    value={EventForm.location}
                />

                <label htmlFor="date">Event Date</label>
                {touched.date && errors.date && <span style={{ color: "red"}}>{errors.date}</span>}
                <Field
                    type="date"
                    name="date"
                    value={EventForm.date}
                />

                <label htmlFor="time">Event Time</label>
                {touched.time && errors.time && <span style={{ color: "red"}}>{errors.time}</span>}
                <Field
                    type="time"
                    name="time"
                    value={EventForm.time}
                />

                <button type="submit">Submit</button>
            </Form>
            {events.map(data =>(
                <ul key ={data.id}>
                    <li>User ID: {data.user_id}</li>
                    <li>Location: {data.location}</li>
                    <li>Date: {data.date}</li>
                    <li>Time: {data.time}</li>
                </ul>
            ))}
        </div>
    )
}

const FormikEventForm = withFormik({
    mapPropsToValues({ user_id, location, date, time }) {
        return {
            user_id : user_id || "",
            location : location || "",
            date : date || "",
            time : time || "",
        };
    },

    validationSchema: Yup.object().shape({
        user_id: Yup.string()
            .required("User ID is required "),
        location: Yup.string()
            .required("Location is required "),
        date: Yup.string()
            .required("Date is required "),
        time: Yup.string()
            .required("Time is required"),
    }),

    handleSubmit(values, {resetForm, setSubmitting, setStatus}) {
        console.log(values);

        axiosWithAuth()
            .post(`https://potluckplanner-buildweek.herokuapp.com/api/potluck/`, EventForm)
            .then(response => {
                console.log("axiosResponse",response)
                setStatus(response.data);
                resetForm();
                setSubmitting(false);
            })
            .catch(error => {
                console.log(error);
                setSubmitting(false);
            });
    }
})(EventForm);

export default FormikEventForm;