import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./Nutshell.css"
import { ArticleCard } from "./Articles/ArticleCard"
import  logo from "../Images/HH_logo2.png.png"

export const Nutshell = () => (
  <>
    <Route
      render={() => {
        if (sessionStorage.getItem("nutshell_user")) {
          return (
            <>
            <img className="logo" src={logo}></img>
            <h1>Headless Horseman Social</h1>
              <NavBar />
              <ApplicationViews />
            </>
          )
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  
    </>
)
