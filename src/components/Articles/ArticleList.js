// completed by katie
// display of all articles on the DOM

import React, { useState, useEffect } from 'react';
import { ArticleCard } from './ArticleCard';
import {  getAllArticles, deleteArticle } from './ArticleManager';
import "./ArticleList.css"
import { useHistory } from 'react-router';

export const ArticleList = () => {
  // The initial state is an empty array
  const [articles, setArticles] = useState([]);

  const history = useHistory();

  const getArticles = (activities) => {
    // After the data comes back from the API, we
    //  use the setArticles function to update state
    return getAllArticles().then(articlesFromAPI => {
      const sortedActivities = articlesFromAPI.sort((a, b) => b.timestamp - a.timestamp)
      setArticles(sortedActivities)
    });
  };

  const handleDeleteArticle = id => {
    deleteArticle(id)
    .then(() => getAllArticles().then(setArticles));
  };

  // got the articles from the API on the component's first render
  useEffect(() => {
      console.log("useEffect running")
    getArticles();
  }, []);

  // Finally we use .map() to "loop over" the animals array to show a list of article cards
  return (
    <>
    <section className="section-content">
    <button type="button"
      className="btn"
      onClick={() => {history.push("/articles/create")}}>
      Create new Article
    </button>
  </section>
    <div className="articles__card">
      {articles.map(article => <ArticleCard key={article.id} article={article} handleDeleteArticle={handleDeleteArticle}/>
      )}
    </div>
    </>
  );
};