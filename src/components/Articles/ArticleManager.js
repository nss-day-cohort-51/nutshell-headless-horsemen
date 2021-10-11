// completed by katie
// all fetch calls to api to complete neccesary actions on the DOM

const remoteURL = "http://localhost:8088"

export const getArticleById = (articleId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/articles/${articleId}?_expand=location&_expand=customer`)
  .then(res => res.json())
}

export const getAllArticles = () => {
  return fetch(`${remoteURL}/articles`)
  .then(res => res.json())
}

export const deleteArticle = (id) => {
  return fetch(`${remoteURL}/articles/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
}

export const addArticle= (newArticle) => {
  return fetch(`${remoteURL}/articles`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newArticle)
  }).then(response => response.json())
}

export const update = (articleObj) => {
	return fetch(`${remoteURL}/articles/${articleObj.id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(articleObj)
	}).then(data => data.json());
}