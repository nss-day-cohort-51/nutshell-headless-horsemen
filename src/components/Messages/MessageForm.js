import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { addMessage } from './MessageManager';


export const MessageForm = ({getMessages}) => {
    const [message, setMessage] = useState({
		message: "",
	});

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newMessage = {...message}
        let selectedVal = event.target.value

        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newMessage[event.target.id] = selectedVal
        setMessage(newMessage)
    }

    const handleClickSaveMessage = (event) => {
		event.preventDefault() 
			addMessage(message)
				.then(() => getMessages())

		
	}

    const handleFieldChange = event => {
        const stateToChange = { ...message };
        stateToChange[event.target.id] = event.target.value;
        setMessage(stateToChange);
    }

    return (
        
        <form className="messageForm">
			<h2 className="messageForm__title">New Message</h2>
			<fieldset>
				<div className="form-group">
					<input 
                    type="text-area"
                    id="message" 
                    onChange={handleControlledInputChange}
                    required 
                    onChange={handleFieldChange}
                    autoFocus 
                    className="form-control" 
                    placeholder="Direct Message" 
                    value={message.message} 
                    />
				</div>
			</fieldset>
            <button className="btn btn-primary"
				onClick={handleClickSaveMessage}>
				Send Message
          </button>
		</form>
    
    )
}