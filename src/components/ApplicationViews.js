import React from "react"
import { Route } from "react-router-dom"
import { TaskEditForm } from "./task/TaskEditForm";
import { TaskForm } from './task/TaskForm';
import { TaskList } from "./task/TaskList"


export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
      </Route>
      <Route path="/friends">
        {/* Render the component for list of friends */}
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

      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
    </>
  )
}
