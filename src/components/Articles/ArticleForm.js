import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { addArticle } from './ArticleManager';
import "./ArticleForm.css"

export const ArticleForm = () => {
	// State will contain both animal data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState()

	const [article, setArticle] = useState({
		title: "",
		synopsis: "",
        timestamp:Date.now(),
        URL: "",
	});

	const [isLoading, setIsLoading] = useState(false);

	// you will need the the `getAll` in the LocationsManager and CustomersManager to complete this section

	const history = useHistory();

	//when a field changes, update state. The return will re-render and display based on the values in state
	// NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
	//Controlled component

	const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newArticle = { ...article }
		let selectedVal = event.target.value
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* Animal is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newArticle[event.target.id] = selectedVal
		// update state
		setArticle(newArticle)
	}

	const handleClickSaveArticle = (event) => {
		event.preventDefault() 
			addArticle(article)
				.then(() => history.push("/"))
		
	}

	return (
		<form className="articleForm">
			<h2 className="articleForm__title">New Article</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="title">Title:</label>
					<input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Title" value={article.title} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="synopsis">Synopsis:</label>
					<input type="text" id="synopsis" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Synopsis" value={article.synopsis} />
				</div>
			</fieldset>
            <fieldset>
				<div className="form-group">
					<label htmlFor="url">URL:</label>
					<input type="text" id="url" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="URL" value={article.url} />
				</div>
			</fieldset>
			<button className="btn btn-primary"
				onClick={handleClickSaveArticle}>
				Save Article
          </button>
		</form>
	)
};