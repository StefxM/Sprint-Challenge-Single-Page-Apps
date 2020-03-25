import React from "react";
import { Link } from 'react-router-dom';
//import WelcomePage from "./WelcomePage"

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center"><u>Time to get schwifty!</u></h1>
      <Link to="./Welcome.js" className="character-button"><center>Characters</center></Link>
      <div>
      <center><img
          className="main-img"
          src="https://p0.piqsels.com/preview/1003/989/262/rick-and-morty-action-figures.jpg"
          alt="rmfamily"
          /></center>

        
    </div>
    </header>
   
  );
}

