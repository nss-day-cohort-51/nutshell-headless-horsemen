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