
import React, { useEffect, useState } from 'react';
import { getAllTasks, deleteTask } from './TaskManager';
import { TaskCard } from './TaskCard';
import { useHistory } from "react-router-dom"

export const TaskList = () => {
	console.log("TaskList Invoked")
	const [tasks, setTasks] = useState([])

	const history = useHistory();

	const getTasks = () => {
		console.log("getTasks Invoked")
		return getAllTasks().then(tasksFromAPI => {
			setTasks(tasksFromAPI);
		});
	};

	const handleDeleteTask = id => {
		deleteTask(id)
			.then(() => getAllTasks().then(setTasks));
	};


	useEffect(() => {
		console.log("useEffect Invoked")
		getTasks();
	}, []);

	return (
		<>
		<section className="section-content">
  		<button type="button"
      className="btn"
      onClick={() => {history.push("/tasks/create")}}>
      Add Task
  		</button>
		</section>

		<div className="container-cards">
			{tasks.map(task =>
				<TaskCard key={task.id} task={task} handleDeleteTask={handleDeleteTask} />)}
		</div>
		</>
	);
};