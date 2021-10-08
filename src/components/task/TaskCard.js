import React from "react"
import { useHistory } from "react-router-dom"


export const TaskCard = ({ task, handleDeleteTask }) => {
    const history = useHistory();

    return (
        <section className="task card" >
            <h3 className="task__name">{task.name}</h3>
            <div className="task__completeBy">Complete By: {task.completeBy}</div>
            <button type="button"
                onClick={() => history.push(`/tasks/${task.id}/edit`)}>
                Edit
            </button>
            <button type="button-delete" onClick={() => handleDeleteTask(task.id)}>Completed &#x2705;</button>
        </section>
    )
}



//