import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { EventCard } from './EventCard';
import { deleteEvent, getAllEvents } from './EventManager';


export const EventList = () => {

    const [events, setEvents] = useState([]);
    const history = useHistory();

    const getEvents = () => {
        return getAllEvents().then(eventsFromAPI => {
            console.log(eventsFromAPI);
            setEvents(eventsFromAPI);
        });
    };

    const handleDeleteEvent = id => {
        deleteEvent(id)
            .then(() => getAllEvents().then(setEvents));
    };

    useEffect(() => {
        getEvents();
    }, []);

    return (
        <>

            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { history.push("/events/create") }}>
                    Add Event
                </button>
            </section>

            <div className="container-cards">
                {events.map(event => <EventCard key={event.id} event={event} handleDeleteEvent={handleDeleteEvent} />)}
            </div>
        </>
    );
};

