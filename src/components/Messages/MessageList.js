import React, {useState, useEffect} from "react";
import { MessageCard } from "./MessageCard";
import { getAllMessages, deleteMessage } from "./MessageManager";
import "./MessageList.css"
import { useHistory } from "react-router";

export const MessageList = () => {
    const [messages, setMessages] = useState([]);

    const history = useHistory();

    const getMessages = (dms) => {
        return getAllMessages().then(messagesFromAPI => {
            const 
        })
    }
}