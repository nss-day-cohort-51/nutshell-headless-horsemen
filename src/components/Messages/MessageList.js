import React, {useState, useEffect} from "react";
import { MessageCard } from "./MessageCard";
import { getAllMessages, deleteMessage } from "./MessageManager";
import { useHistory } from "react-router";

export const MessageList = () => {
    const [messages, setMessages] = useState([]);

    const history = useHistory();

    const getMessages = (dms) => {
        return getAllMessages().then(messagesFromAPI => {
            const sortedMessages = messagesFromAPI.sort((a, b) => b.timestamp -a.timestamp)
            setMessages(sortedMessages) 
        });
    };

    const handleDeleteMessage = id => {
        deleteMessage(id)
        .then(() => getAllMessages().then(setMessages));
    };

    useEffect(() => {
        getMessages();
    }, []);

    return (
        <>
        <section className="section-content">
        <button type="button"
          className="btn"
          onClick={() => {history.push("/messages/create")}}>
          Create new Message
        </button>
      </section>
        <div className="messages__card">
          {messages.map(message => <MessageCard key={message.id} message={message} handleDeleteMessage={handleDeleteMessage}/>
          )}
        </div>
        </>
    )
}