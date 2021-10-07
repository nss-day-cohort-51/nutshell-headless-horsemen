import React from "react"
import { Route } from "react-router-dom"
import { EventList } from "./Events/EventList"
import { ArticleList } from "./Articles/ArticleList"
import { FriendList } from "./Friends/FriendList"
import { ArticleForm } from "./Articles/ArticleForm"
import { NewFriendForm } from "./Friends/NewFriendForm"

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        <ArticleList />
      </Route>

      <Route path="/articles/create">
          <ArticleForm />
      </Route>
      

      
      <Route path="/friends">
        {/* Render the component for list of friends */}
        <FriendList />
      </Route>

      <Route path="/friends/create">
        {/* Render the component for list of friends */}
        <NewFriendForm />
      </Route>



      <Route path="/messages">
        {/* Render the component for the messages */}
      </Route>

      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
      </Route>

      <Route path="/events">
        <EventList />
      </Route>
    </>
  )
}
