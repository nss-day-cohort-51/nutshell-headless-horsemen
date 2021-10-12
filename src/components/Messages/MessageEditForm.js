
import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { getMessageById } from "./MessageManager"
import { update } from "./MessageManager"

export const MessageEditForm = ({getMessages}) => {
  const [message, setMessage] = useState({ message: ""});
  const [isLoading, setIsLoading] = useState(false);
// "isLoading" is showing user data is being loaded but is not fully loaded yet
  const {messageId} = useParams();
  // useParams lets you access parameters of current <route>
  const history = useHistory();
// useHistory all the URL visited on DOM
  const handleFieldChange = evt => {
    const stateToChange = { ...message };
    stateToChange[evt.target.id] = evt.target.value;
    setMessage(stateToChange);
  };
// preventDefault---you dont want HTML to handle your code by default
  const updateExistingMessage = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedMessage = {
      id: messageId,
      message: message.message
    };

     update(editedMessage)
    .then(() => history.push("/messages")
    // history.push pushes this URL onto all the history in the DOM
    )
  }
// useEffect tells react component it needs to do something after rendering
  useEffect(() => {
   getMessageById(messageId)
      .then(message => {
        setMessage(message);
        setIsLoading(false);
      });
  }, [messageId]);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="message"
              value={message.message}
            />
            <label htmlFor="message">Change Message</label>

          </div>
          <div className="alignRight">
            <button
              type="button" 
              onClick={updateExistingMessage}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}