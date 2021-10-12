import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { addEvent } from './EventManager';




export const EventForm = () => {

    // Define the initial state of the form inputs with useState()

    const [event, setEvent] = useState({
        name: "",
        location: "",
        date: "",
        userId: parseInt(sessionStorage.getItem("nutshell_user"))
    });




    const history = useHistory();

    //when a field changes, update state. The return will re-render and display based on the values in state
    // NOTE! What's happening in this function can be very difficult to grasp. 
    //Controlled component

    const handleControlledInputChange = (evt) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newEvent = { ...event }
        let selectedVal = evt.target.value
        // forms always provide values as strings. But we want to save the ids as numbers.
        if (evt.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        /* Event is an object with properties.
        Set the property to the new value
        using object bracket notation. */
        newEvent[evt.target.id] = selectedVal
        // update state
        setEvent(newEvent)
    }

    // useEffect(() => {
    //     //load location data and setState
    //     getAllEvents().then(events => {
    //         setEvents(events)
    //     })
    // }, []);




    const handleClickSaveEvent = (evt) => {
        evt.preventDefault() //Prevents the browser from submitting the form

        //invoke addEvent passing event as an argument.
        //once complete, change the url and display the event list
        addEvent(event)
            .then(() => history.push("/events"))
    }


    return (
        <form className="eventForm">
            <h2 className="eventForm__title">New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Event name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Event name" value={event.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Event location:</label>
                    <input type="text" id="location" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Event location" value={event.location} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Event date:</label>
                    <input type="date" id="date" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Event date" value={event.date} />
                </div>
            </fieldset>


            <button className="btn btn-primary"
                onClick={handleClickSaveEvent}>
                Save Event
            </button>
        </form>
    )
};
