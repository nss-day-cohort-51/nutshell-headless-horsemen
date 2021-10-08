const remoteURL = "http://localhost:8088"


export const getTaskById = (taskId) => {
  //be sure your tasks have good data and related to a location and customer
  return fetch(`${remoteURL}/tasks/${taskId}?`)
  .then(res => res.json())
}

export const getAllTasks = () => {
  return fetch(`${remoteURL}/tasks`)
  .then(res => res.json())
}

export const deleteTask = (id) => {
  return fetch(`${remoteURL}/tasks/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
}

  export const addTask = (newTask) => {
    return fetch(`${remoteURL}/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
    }).then(response => response.json())
}

export const update = (editedTask) => {
  return fetch(`${remoteURL}/tasks/${editedTask.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedTask)
  }).then(data => data.json());
}

