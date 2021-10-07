import React from "react"
import { useHistory } from "react-router-dom"


export const TaskCard = ({ task, handleDelete }) => {
    const history = useHistory();

    return (
        <section className="task card" >
            <h3 className="task__name">{task.name}</h3>
            <div className="task__completeBy">Complete By: {task.completeBy}</div>
            <button type="button" onClick={() => handleDelete(task.id)}>Completed &#x2705;</button>
            <button type="button"
                onClick={() => history.push(`/tasks/${task.id}/edit`)}>
                Edit
            </button>
        </section>
    )
}