import React from "react"
import "./Article.css"
import { ArticleList } from "./ArticleList"
import { useHistory } from "react-router"

export const ArticleCard = ({article, handleDeleteArticle}) => {
    const history = useHistory();
    return (
    
     <div className="card_article">
        <div className="header">Article</div>
        <div className="card_article_content">
        <p className="title">{article.title}</p>
        <div className="content">
        <p className="synopsis">{article.synopsis}</p>
        <p className="timestamp">{article.timestamp}</p>
        <p>{article.url}</p>
        <button type="button" onClick={() => handleDeleteArticle(article.id)}>Delete Article</button>
     </div>
     </div>
     </div>
    )
}