import React from "react"
import { Route } from "react-router-dom"
import { TaskEditForm } from "./task/TaskEditForm";
import { TaskForm } from './task/TaskForm';
import { TaskList } from "./task/TaskList"

import { EventList } from "./Events/EventList"
import { ArticleList } from "./Articles/ArticleList"
import { FriendList } from "./Friends/FriendList"
import { EventEditForm } from "./Events/EventEditForm"
import { EventForm } from "./Events/EventForm"
import { ArticleForm } from "./Articles/ArticleForm"
import { ArticleEditForm } from "./Articles/ArticleEditForm";
import { NewFriendForm } from "./Friends/NewFriendForm"
import { EventDetail } from "./Events/EventDetail";

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        <ArticleList />
      </Route>

      <Route path="/articles/create">
        <ArticleForm />
      </Route>

      <Route exact path="/articles/:articleId(\d+)/edit">
         <ArticleEditForm /> 
      </Route>

      <Route path="/friends">
        {/* Render the component for list of friends */}
        <FriendList />
      </Route>

      <Route path="/messages">
        {/* Render the component for the messages */}
      </Route>

      <Route path="/tasks/create">
        <TaskForm />
      </Route>

      <Route path="/tasks/:taskId(\d+)/edit">
        <TaskEditForm />
      </Route>

      <Route exact path="/tasks">
        <TaskList />
      </Route>

      <Route exact path="/events">
        <EventList />
      </Route>

      <Route exact path="/events/edit/:eventId(\d+)">
        <EventEditForm />
      </Route>

      <Route exact path="/events/:eventId(\d+)">
        <EventDetail />

      </Route>
      <Route path="/events/create">
        <EventForm />
      </Route>
    </>
  )
}
