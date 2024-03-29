// Worked on by Ben

import React, { useEffect, useState } from 'react';
import { getAllTasks, deleteTask } from './TaskManager';
import { TaskCard } from './TaskCard';
import { useHistory } from "react-router-dom"
import "./Task.css"

//inital state is empty array
export const TaskList = () => {
	console.log("TaskList Invoked")
	const [tasks, setTasks] = useState([])

	const history = useHistory();

//gets data from API and updates state
	const getTasks = () => {
		console.log("getTasks Invoked")
		return getAllTasks().then(tasksFromAPI => {
			setTasks(tasksFromAPI);
		});
	};
//allows for the deletion of tasks from the DOM
	const handleDeleteTask = id => {
		deleteTask(id)
			.then(() => getAllTasks().then(setTasks));
	};

//gets tasks from API on component's first render
	useEffect(() => {
		console.log("useEffect Invoked")
		getTasks();
	}, []);

//loops over array and displays cards
	return (
		<>
		<section className="section-content">
  		<button className="add-task" type="button"
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