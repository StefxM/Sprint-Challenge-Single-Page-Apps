import React from "react";
import CharacterList from "./components/CharacterList";
import Header from "./components/Header";
import { Route } from "react-router-dom";
//import WelcomePage from "./components/WelcomePage.js";



export default function App() {
 
  return (
    <main data-testid='app'>
     
      <Route exact path="/" component={Header} />
      <Route exact path="/characterList" component={CharacterList} />
          </main>
        );
};
