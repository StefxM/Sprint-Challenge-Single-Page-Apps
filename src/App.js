import React from "react";

import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList";
import { Route, Link }from "react-router-dom";


export default function App() {
 
  return (
    <main data-testid='app'>
      <WelcomePage/>
          </main>
        );
};
