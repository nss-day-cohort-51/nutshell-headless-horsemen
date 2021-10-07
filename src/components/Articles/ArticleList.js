import React, { useState, useEffect } from 'react';
//import the components we will need
import { ArticleCard } from './ArticleCard';
import {  getAllArticles, deleteArticle } from './ArticleManager';
import "./ArticleList.css"
import { useHistory } from 'react-router';

export const ArticleList = () => {
  // The initial state is an empty array
  const [articles, setArticles] = useState([]);

  const history = useHistory();

  const getArticles = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return getAllArticles().then(articlesFromAPI => {
      setArticles(articlesFromAPI)
    });
  };

  const handleDeleteArticle = id => {
    deleteArticle(id)
    .then(() => getAllArticles().then(setArticles));
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
      console.log("useEffect running")
    getArticles();
  }, []);

  // Finally we use .map() to "loop over" the animals array to show a list of animal cards
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