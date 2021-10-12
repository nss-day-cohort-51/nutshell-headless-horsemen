// Worked on by Ben

//hosts json api
const remoteURL = "http://localhost:8088"

//gets task ID from json
export const getTaskById = (taskId) => {
  return fetch(`${remoteURL}/tasks/${taskId}?`)
  .then(res => res.json())
}
//gets entire array of tasks from the json
export const getAllTasks = () => {
  return fetch(`${remoteURL}/tasks`)
  .then(res => res.json())
}
//allows for the removal of tasks from the json
export const deleteTask = (id) => {
  return fetch(`${remoteURL}/tasks/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
}
//allows for the adding of tasks to the json
  export const addTask = (newTask) => {
    return fetch(`${remoteURL}/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
    }).then(response => response.json())
}
//allows for the editing of tasks on the json
export const update = (editedTask) => {
  return fetch(`${remoteURL}/tasks/${editedTask.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedTask)
  }).then(data => data.json());
}

