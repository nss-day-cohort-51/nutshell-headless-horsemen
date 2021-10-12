import React from "react";
import "./Message.css";

export const MessageCard = ({message, handleDeleteMessage}) => {

    return (
        <div className="message_card">
        <div className="message_card_content">
        <h4>{message.userId}</h4>
        <p>{message.message}</p>
        <button type="button-delete" onClick={() => handleDeleteMessage(message.id)}>Delete</button>
        </div>
        </div>
    )
}
