import React, { useState, useEffect } from 'react';
//import the components we will need
import { ArticleCard } from './ArticleCard';
import {  getAllArticles } from './ArticleManager';
import "./ArticleList.css"

export const ArticleList = () => {
  // The initial state is an empty array
  const [articles, setArticles] = useState([]);

  const getArticles = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return getAllArticles().then(articlesFromAPI => {
        console.log(articlesFromAPI)
      setArticles(articlesFromAPI)
    });
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
      console.log("useEffect running")
    getArticles();
  }, []);

  // Finally we use .map() to "loop over" the animals array to show a list of animal cards
  return (
    <div className="articles__card">
      {articles.map(article => <ArticleCard key={article.id} article={article}/>)}
    </div>
  );
};