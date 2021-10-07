import React from "react"
import { Route } from "react-router-dom"
import { EventList } from "./Events/EventList"
import { ArticleList } from "./Articles/ArticleList"
import { FriendList } from "./Friends/FriendList"
import { EventEditForm } from "./Events/EventEditForm"
import { EventForm } from "./Events/EventForm"

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        <ArticleList />
      </Route>

      <Route path="/friends">
        {/* Render the component for list of friends */}
        <FriendList />
      </Route>
      <Route path="/messages">
        {/* Render the component for the messages */}
      </Route>
      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
      </Route>

      <Route exact path="/events">
        <EventList />
      </Route>
      <Route exact path="/events/edit/:eventId(\d+)">
        <EventEditForm />
      </Route>
      <Route path="/events/create">
        <EventForm />
      </Route>
    </>
  )
}
