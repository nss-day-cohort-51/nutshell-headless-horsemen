import React, { useState, useEffect } from "react"
import { getEventById, update } from "./EventManager"
import "./EventEditForm.css"
import { useParams, useHistory } from "react-router"

export const EventEditForm = () => {
    const [event, setEvent] = useState({ name: "", location: "", date: "" });
    const [isLoading, setIsLoading] = useState(false);

    const { eventId } = useParams();
    const history = useHistory();

    const handleFieldChange = evt => {
        const stateToChange = { ...event };
        stateToChange[evt.target.id] = evt.target.value;
        setEvent(stateToChange);
    };

    const updateExistingEvent = evt => {
        evt.preventDefault()
        setIsLoading(true);

        // This is an edit, so we need the id
        const editedEvent = {
            id: eventId,
            name: event.name,
            location: event.location,
            date: event.date


        };

        update(editedEvent)
            .then(() => history.push("/events")
            )
    }

    useEffect(() => {
        getEventById(eventId)
            .then(event => {
                setEvent(event);
                setIsLoading(false);
            });
    }, [eventId]);

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="name"
                            value={event.name}
                        />
                        <label htmlFor="name">Event name</label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="location"
                            value={event.location}
                        />
                        <label htmlFor="location">Location</label>

                        <input
                            type="date"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="date"
                            value={event.date}
                        />
                        <label htmlFor="date">Date</label>
                    </div>
                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingEvent}
                            className="btn btn-primary"
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}
