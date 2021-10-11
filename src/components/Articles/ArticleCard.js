// completed by Katie
// functions and return for Article Card display on DOM

import React from "react"
import "./Article.css"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"

export const ArticleCard = ({article, handleDeleteArticle}) => {
    const history = useHistory();
    // allows the timestamp to be put into a human readable format
    const getReadableDate = (date) => {
      return new Date(date).toLocaleDateString();
    }
    return (
    
     <div className="card_article">
        <div className="card_article_content">
        <p className="title">{article.title}</p>
        <div className="content">
        <p className="synopsis">{article.synopsis}</p>
        <p className="timestamp">{getReadableDate(article.timestamp)}</p>
        <a href={article.url} target="_blank">View website</a>
        <div className="delete-article">
        <button type="button-delete" onClick={() => handleDeleteArticle(article.id)}>Delete Article</button>
        </div>
          <Link to={`/articles/${article.id}/edit`}>
            <button className="edit_button">Edit</button>
          </Link>
     </div>
     </div>
     </div>
    )
}