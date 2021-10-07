import React from "react"
import { Route } from "react-router-dom"

import { EventCard } from "./Events/EventCard"
import { EventList } from "./Events/EventList"

=======
import { FriendList } from "./Friends/FriendList"


export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
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

      <Route path="/events">
        <EventList />
      </Route>
    </>
  )
}
