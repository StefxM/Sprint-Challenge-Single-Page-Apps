import React, { useState } from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import { Route } from "react-router-dom";


export default function App() {

  return (
    <main data-testid='app'>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/components/WelcomePage" component={WelcomePage}/>
          </main>
        );
};
