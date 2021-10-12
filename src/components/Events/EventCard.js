import React from "react"
import "./Event.css"
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

export const EventCard = ({ event, handleDeleteEvent }) => {

    const history = useHistory();
    const getReadableDate = (date) => {
        return new Date(date).toLocaleDateString();
    }
    return (

        <section className="event">
            <h3 className="event__name">{event.name}</h3>
            <div className="event__location">{event.location}</div>
<<<<<<< HEAD
            <div className="event__date">{event.date}</div>
            <button className="delete-button-event" type="button" onClick={() => handleDeleteEvent(event.id)}>Delete</button>
=======
            <div className="event__date">{getReadableDate(event.date)}</div>
            <button type="button" onClick={() => handleDeleteEvent(event.id)}>Delete</button>
>>>>>>> 0bd0c57633f7539229d4896723780502a76b063d
            <Link to={`/events/${event.id}`}>
                <button className="details-button-event">Details</button>
            </Link>
            <button className="edit-button-event" type="button"
                onClick={() => history.push(`/events/edit/${event.id}`)}>
                Edit
            </button>
            <button type="button" className="btn-weather">Show weather</button>
        </section>
    )
}
