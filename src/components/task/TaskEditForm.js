// Worked on by Ben

import React, { useState, useEffect } from "react"
import { update, getTaskById } from "./TaskManager"
import "./TaskForm.css"
import { useParams, useHistory } from "react-router-dom"

export const TaskEditForm = () => {
	const [task, setTask] = useState({
		name: "",
		completed: false,
		completeBy: "",
		userId: 1
	});

// shows user data is being loaded but is not fully loaded yet
    const [isLoading, setIsLoading] = useState(false);

// lets you access parameters of current <route>
  const {taskId} = useParams();
// all the URL visited on DOM
  const history = useHistory();

//allows for inputting the info for a task
  const handleFieldChange = event => {
    const stateToChange = { ...task };
    stateToChange[event.target.id] = event.target.value;
    setTask(stateToChange);
    console.log("here i am")
  };

//gets id of task for editing and prevents HTML from displaying to DOM
  const updateExistingTask = event => {
    event.preventDefault()
    setIsLoading(true);
  
    const editedTask = {
      id: taskId,
      name: task.name,
      completeBy: task.completeBy,
      completed: task.completed
    };
    

//function that puts edited task onto the DOM
  update(editedTask)
    .then(() => history.push("/tasks"))  
//prevents edited task from displaying unless all input fields have something in them
    if (task.name === "" || task.completeBy === 0) {
        window.alert("Please complete all fields");
    } else {
        setIsLoading(true);
        setIsLoading(false)
    }
  }
//tells react component it needs to do something after rendering
    useEffect(() => {
    getTaskById(taskId)
      .then(task => {
        setTask(task);
        setIsLoading(false);
      });
  }, []);


  return (
    <>
        <form>
            <fieldset>
                <div className="formgrid">
                    <input
                        type="hidden"
                        required
                        className="form-control"
                        onChange={handleFieldChange}
                        id="userId"
                        value={task.userId}
                    />

                    <input
                        type="text"
                        required
                        className="form-control"
                        onChange={handleFieldChange}
                        id="name"
                        value={task.name}
                    />
                    <label htmlFor="name">Task name</label>

                    <input
                        type="date"
                        required
                        className="form-control"
                        onChange={handleFieldChange}
                        id="completeBy"
                        value={task.completeBy}
                    />
                    <label htmlFor="completeBy">Due date</label>

                </div>
                <div className="alignRight">
                    <button
                        type="button" disabled={isLoading}
                        onClick={updateExistingTask}
                        className="btn btn-primary"
                    >Submit</button>
                </div>
            </fieldset>
        </form>
    </>
);
}