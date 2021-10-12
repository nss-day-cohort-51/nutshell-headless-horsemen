import React, {useState, useEffect} from "react";
import { MessageCard } from "./MessageCard";
import { getAllMessages, deleteMessage } from "./MessageManager";
import { useHistory } from "react-router";
import { MessageForm } from "./MessageForm";
import { MessageEditForm } from "./MessageEditForm";

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
        <MessageForm getMessages={getMessages}/>
      </section>
        <div className="messages__card">
          {messages.map(message => <MessageCard key={message.id} message={message} handleDeleteMessage={handleDeleteMessage}/>
          )}
        </div>
        </>
    )
}