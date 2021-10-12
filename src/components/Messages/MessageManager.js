
// Completed By Devery

const remoteURL = "http://localhost:8088"

// grabs message by its id from json
export const getMessageById = (messageId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/messages/${messageId}?_expand=location&_expand=customer`)
  .then(res => res.json())
}

// retrieves all messages from json
export const getAllMessages = () => {
  return fetch(`${remoteURL}/messages`)
  .then(res => res.json())
}

// deletes a message by its id from the json
export const deleteMessage = (id) => {
  return fetch(`${remoteURL}/messages/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
}

// adds a message to the json
export const addMessage= (newMessage) => {
  return fetch(`${remoteURL}/messages`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newMessage)
  }).then(response => response.json())
}

// updates json with new or lack of data
export const update = (messageObj) => {
	return fetch(`${remoteURL}/messages/${messageObj.id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(messageObj)
	}).then(data => data.json());
}
