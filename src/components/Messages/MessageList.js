<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { getAlls, deleteAnimal } from '../../modules/AnimalManager';
import { AnimalCard } from './AnimalCard';
import { useHistory } from 'react-router';

export const AnimalList = () => {

    const [animals, setAnimals] = useState([]);
    const history = useHistory();

    const getAnimals = () => {
        return getAllAnimals().then(animalsFromAPI => {
            // We'll do something more interesting with this data soon.
            console.log(animalsFromAPI);
            setAnimals(animalsFromAPI);
        });
    };


    const handleDeleteAnimal = id => {
        deleteAnimal(id)
            .then(() => getAllAnimals().then(setAnimals));
    };




    useEffect(() => {
        getAnimals();
=======
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
>>>>>>> main
    }, []);

    return (
        <>
<<<<<<< HEAD

            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { history.push("/animals/create") }}>
                    Admit Animal
                </button>
            </section>

            <div className="container-cards">
                {animals.map(animal => <AnimalCard animal={animal} handleDeleteAnimal={handleDeleteAnimal} />)}
            </div>
        </>
    );
};

=======
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
>>>>>>> main
