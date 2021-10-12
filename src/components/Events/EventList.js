import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { EventCard } from './EventCard';
import { deleteEvent, getAllEvents } from './EventManager';
import { FirstEventCard } from './firstEventCard';


export const EventList = () => {

    const [events, setEvents] = useState([]);
    const history = useHistory();

    const getEvents = () => {
        return getAllEvents().then(eventsFromAPI => {
            const sortedEvents = eventsFromAPI.sort((a, b) => new Date(a.date) - new Date(b.date))
            //console.log(eventsFromAPI);
            setEvents(sortedEvents);
        });
    };

    const [filteredPast, setFilteredPastEvents] = useState([]);
    const [filteredFuture, setFilteredFutureEvents] = useState([]);

    useEffect(() => {

        const pastEvents = events.filter(event => {
            return new Date(event.date + "T00:00:00").getTime() < new Date().getTime();

        });
        setFilteredPastEvents(pastEvents);

        const futureEvents = events.filter(event => {

            return new Date(event.date + "T00:00:00").getTime() >= new Date().getTime();
        });
        setFilteredFutureEvents(futureEvents);

    }, [events]);




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
                {filteredFuture.map(event => {
                    console.log(filteredFuture)
                    if (filteredFuture.indexOf(event) !== 0) {
                        return <EventCard key={event.id} event={event} handleDeleteEvent={handleDeleteEvent} />
                    } else {
                        return <FirstEventCard key={event.id} event={event} handleDeleteEvent={handleDeleteEvent} />
                    }
                })
                }
                {filteredPast.map(event => <EventCard key={event.id} event={event} handleDeleteEvent={handleDeleteEvent} />)}
            </div>
        </>
    );
};

