import React, { useEffect, useState } from 'react';
import { EventCard } from './EventCard';
import { getAllEvents } from './EventManager';

export const EventList = () => {

    const [events, setEvents] = useState([]);

    const getEvents = () => {
        return getAllEvents().then(eventsFromAPI => {
            console.log(eventsFromAPI);
            setEvents(eventsFromAPI);
        });
    };


    useEffect(() => {
        getEvents();
    }, []);

    return (
        <>

            <div className="container-cards">
                {events.map(event => <EventCard key={event.id} event={event} />)}
            </div>
        </>
    );
};

