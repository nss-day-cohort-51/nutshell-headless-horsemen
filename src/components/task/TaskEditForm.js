import React, { useState, useEffect } from "react"
import { update, getTaskById } from "./TaskManager"
import "./TaskForm.css"
import { useParams, useHistory } from "react-router-dom"

export const TaskEditForm = () => {
	const [task, setTask] = useState({
		name: "",
		completed: false,
		completeBy: "",
		userId: 0
	});
    const [isLoading, setIsLoading] = useState(false);

  const {taskId} = useParams();
  const history = useHistory();

  const handleFieldChange = event => {
    const stateToChange = { ...task };
    stateToChange[event.target.id] = event.target.value;
    setTask(stateToChange);
  };

  const updateExistingTask = event => {
    event.preventDefault()
    setIsLoading(true);

  
    const editedTask = {
      id: taskId,
      name: task.name,
      completeBy: task.completeBy,
      completed: task.completed
    };
    
  update(editedTask)
    .then(() => history.push("/tasks"))  
    if (task.name === "" || task.completeBy === 0) {
        window.alert("Please complete all fields");
    } else {
        setIsLoading(true);
        setIsLoading(false)
    }
  }

    useEffect(() => {
    getTaskById(taskId)
      .then(task => {
        setTask(task);
        setIsLoading(false);
      });
  }, []);

  const activeId = sessionStorage.getItem("activeUser")
task.userId = parseInt(activeId)


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