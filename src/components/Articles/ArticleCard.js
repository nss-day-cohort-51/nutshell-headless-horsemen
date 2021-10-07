import React from "react"
import "./Article.css"
import { ArticleList } from "./ArticleList"

export const ArticleCard = ({article}) => {
    
    return (
    
     <div className="articles__card">
        <div className="article_card_content">
        <p>Title: {article.title}</p>
        <p>Synopsis: {article.synopsis}</p>
        <p>Date: {article.timestamp}</p>
        <p>URL: {article.url}</p>
     </div>
    </div>
    )
}