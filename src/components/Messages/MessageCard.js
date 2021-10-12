import React from "react";
import "./Message.css";
import { Link } from "react-router-dom";

export const MessageCard = ({message, handleDeleteMessage}) => {

    return (
        <div className="message_card">
        <div className="message_card_content">
        <h4>{message.userId}</h4>
        <p className="message_message" >{message.message}</p>
        <button type="button-delete" onClick={() => handleDeleteMessage(message.id)}>Delete</button>
        <Link to={`/messages/${message.id}/edit`}>
            <button className="edit_button">Edit</button>
          </Link>
        </div>
        </div>
    )
}
