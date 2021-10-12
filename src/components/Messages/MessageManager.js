<<<<<<< HEAD
=======
const remoteURL = "http://localhost:8088"

export const getMessageById = (messageId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/messages/${messageId}?_expand=location&_expand=customer`)
  .then(res => res.json())
}

export const getAllMessages = () => {
  return fetch(`${remoteURL}/messages`)
  .then(res => res.json())
}

export const deleteMessage = (id) => {
  return fetch(`${remoteURL}/messages/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
}

export const addMessage= (newMessage) => {
  return fetch(`${remoteURL}/messages`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newMessage)
  }).then(response => response.json())
}

export const update = (messageObj) => {
	return fetch(`${remoteURL}/messages/${messageObj.id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(messageObj)
	}).then(data => data.json());
}
>>>>>>> main
