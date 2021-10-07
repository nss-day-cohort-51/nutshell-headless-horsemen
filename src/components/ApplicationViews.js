import React from "react"
import { Route } from "react-router-dom"
import { ArticleCard } from "./Articles/ArticleCard"
import { ArticleList } from "./Articles/ArticleList"

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        <ArticleList/>
      </Route>
      
      <Route path="/friends">
        {/* Render the component for list of friends */}
      </Route>
      <Route path="/messages">
        {/* Render the component for the messages */}
      </Route>
      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
      </Route>
      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
    </>
  )
}
