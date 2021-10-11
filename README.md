# Reactive Nutshell: Headless Horseman

### Headless-Horseman explained

Headless Horseman is a social media app that allows a user to communicate with another user via message. This app also allows users to post their favorite articles and events and share them with their friends through their feed. This app also allows users to keep track of there tasks with dates they would like to acheive them by.

## Setup: Follow these steps exactly

1. Open the terminal and clone the repository `https://github.com/nss-day-cohort-51/nutshell-headless-horsemen`.
1. In order to begin serving the project `cd` into `Nutshell-Headless-Horseman`.
1. Type `npm install` and wait for all dependencies to be installed.
1. After installing the dependencies, in the Nutshell-Headless-Horseman directory run `npm start` to serve on your local host.
1. In a separate window in the temrinal `cd` into `Nutshell-Headless-Horseman`.
1. `cd` into `api/` and type `json-sever -p 8088 -w database.json`.
1. Serve `localhost:8088` in the web browser so retrieve data in database.

## How to navigate Nutshell-Headless-Horseman

Upon serving the correct hosts through your browser, you will be prompted with an option to sign in or register as anew user. You will need to register as a new user.

After creating your account, you will notice five nav bar selections allowing users to navigate to articles, tasks, friends, messages or events.

You can begin growing your feed by creating new articles , tasks or events by selecting the "Create New" button on each respective options page.

Once you have created a few entries of your own you can reach out to others by adding them as friends. This can be done under the friends link. Simply type in someone you would like to have as a friend and if available they will be added to your "friends" database. You will be prompted with a web alert if your desired friend is not available.

## Documentation

| [dbdiagram](./src/Images/dbdiagram.png) | [wireframe](./src/Images/wireframe-headless-horseman.png) 
