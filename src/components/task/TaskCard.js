import React from "react"
import { useHistory } from "react-router-dom"
import "./Task.css"


export const TaskCard = ({ task, handleDeleteTask }) => {
    const history = useHistory();

    return (
        <section className="task_card" >
            <h3 className="task__name">{task.name}</h3>
            <div className="task__completeBy">Complete By: {task.completeBy}</div>
            <button className="task_button" type="button"
                onClick={() => history.push(`/tasks/${task.id}/edit`)}>
                Edit
            </button>
            <button className="task_delete" type="button-delete" onClick={() => handleDeleteTask(task.id)}>Completed &#x2705;</button>
        </section>
    )
}
