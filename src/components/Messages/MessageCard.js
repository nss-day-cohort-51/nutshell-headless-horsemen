import React from "react"
import "./Messege.css"
import { useHistory } from "react-router";

export const MessageCard = () => {

    const history = useHistory();

    return (

        <section className="messege">
            <h3 className="messege__name">{message.name}</h3>
            <button type="button" onClick={() => handleDeleteEvent(message.id)}>Delete</button>

        </section>
    )
}
