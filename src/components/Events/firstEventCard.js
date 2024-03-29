// completed by Tessema

import React from "react"
import "./Event.css"
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

export const FirstEventCard = ({ event, handleDeleteEvent }) => {

    const history = useHistory();
    // make the date human readable
    const getReadableDate = (date) => {
        console.log(new Date(date.replace(/-/g, '\/')))
        const ReadableDate = new Date(date.replace(/-/g, '\/')).toLocaleDateString();
        return ReadableDate
    }
    return (

        <section className="first_event">
            <h3 className="first_event__name">{event.name}</h3>
            <div className="first_event__location">{event.location}</div>
            <div className="first_event__date">{getReadableDate(event.date)}</div>
            <button className="btn-delete"type="first_button" onClick={() => handleDeleteEvent(event.id)}>Delete</button>
            <Link to={`/events/${event.id}`}>
                <button className="btn-details">Details</button>
            </Link>
            <button className="btn-edit"type="first_button"
                onClick={() => history.push(`/events/edit/${event.id}`)}>
                Edit
            </button>
            <button type="first-button" className="btn-weather">Show weather</button>
        </section>
    )
}
