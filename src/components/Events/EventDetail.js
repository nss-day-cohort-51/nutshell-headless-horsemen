// completed by Tessema

import React, { useState, useEffect } from 'react';
import { getEventById, deleteEvent } from './EventManager';
import './EventDetail.css';
import { useParams, useHistory } from "react-router-dom"

export const EventDetail = () => {
    const [event, setEvents] = useState({ name: "", location: "", date: "" });
    const [isLoading, setIsLoading] = useState(true);

    const { eventId } = useParams();
    const history = useHistory(); //redirect user to another page


    const handleDelete = () => {
        //invoke the delete function in EventManger and re-direct to the event list.
        setIsLoading(true);
        deleteEvent(eventId).then(() =>
            history.push("/events")
        );
    };

    useEffect(() => {
        //getEventById(id) from EventManager and hang on to the data; put it into state
        console.log("useEffect", eventId)
        getEventById(eventId)
            .then(event => {
                setEvents({
                    name: event.name,
                    location: event.location,
                    date: event.date,

                });
                setIsLoading(false);
            });
    }, [eventId]);

    return (
        <section className="event">
            <h3 className="event__name">{event.name}</h3>
            <div className="event__location">{event.location}</div>
            {/* What's up with the question mark???? See below.*/}
            <div className="event__date">Date: {event.date}</div>
            <button type="button" disabled={isLoading} onClick={handleDelete}>
                Delete
            </button>
        </section>
    );
}