import React from "react"
import "./Event.css"





export const EventCard = ({ event }) => {

    return (

        <section className="event">
            <h3 className="event__name">{event.name}</h3>
            <div className="event__location">{event.location}</div>
            <div className="event__date">{event.date}</div>

        </section>
    )
}
