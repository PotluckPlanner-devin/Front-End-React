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

                <label htmlFor="locations">Event Locations</label>
                {touched.locations && errors.locations && <span style={{ color: "red"}}>{errors.locations}</span>}
                <Field
                    type="text"
                    name="locations"
                    value={EventForm.locations}
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
            {events.map(data =>{
                console.log("THIS IS DATA", data)
                return (
                <ul key ={data.id}>
                    <li>User ID: {data.user_id}</li>
                    <li>locations: {data.locations}</li>
                    <li>Date: {data.date}</li>
                    <li>Time: {data.time}</li>
                </ul>
            )})}
        </div>
    )
}

const FormikEventForm = withFormik({
    mapPropsToValues({ user_id, locations, date, time }) {
        return {
            user_id : user_id || "",
            locations : locations || "",
            date : date || "",
            time : time || "",
        };
    },

    validationSchema: Yup.object().shape({
        user_id: Yup.string()
            .required("User ID is required"),
        locations: Yup.string()
            .required("Locations is required"),
        date: Yup.string()
            .required("Date is required"),
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