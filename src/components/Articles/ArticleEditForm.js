// this is a component

import React, { useState, useEffect } from "react"
import "./ArticleForm.css"
import { useParams, useHistory } from "react-router-dom"
import { getArticleById } from "./ArticleManager"
import { update } from "./ArticleManager"


export const ArticleEditForm = () => {
  const [article, setArticle] = useState({ url: "", title: "", synopsis:"", timestamp:"" });
  const [isLoading, setIsLoading] = useState(false);

  const {articleId} = useParams();
  const history = useHistory();

  const handleFieldChange = evt => {
    const stateToChange = { ...article };
    stateToChange[evt.target.id] = evt.target.value;
    setArticle(stateToChange);
  };
// preventDefault---you dont want HTML to handle your code by default
  const updateExistingArticle = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedArticle = {
      id: articleId,
      url: article.url,
      title: article.title,
      synopsis: article.synopsis,
      timestamp: article.timestamp
    };
console.log(editedArticle)
     update(editedArticle)
    .then(() => history.push("/")
    )
  }

  useEffect(() => {
   getArticleById(articleId)
      .then(article => {
        setArticle(article);
        setIsLoading(false);
      });
  }, [articleId]);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="title"
              value={article.title}
            />
            <label htmlFor="title">Article Title</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="synopsis"
              value={article.synopsis}
            />
            <label htmlFor="synopsis">Synopsis</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="timestamp"
              value={article.timestamp}
            />
            <label htmlFor="timestamp">Timestamp</label>

            <input
              type="date"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="url"
              value={article.url}
            />
            <label htmlFor="url">Article URL</label>

          </div>
          <div className="alignRight">
            <button
              type="button" 
              onClick={updateExistingArticle}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}