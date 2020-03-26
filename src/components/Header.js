import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

export default function Header() {

//styled
  const PrettyHeader = styled.header`
  background-color: black;
  color: teal;
  margin: 2%;
  `;



  return (
    
    <header>
    <PrettyHeader>
      
      <Link to="/CharacterList" className="character-button"><center><h1 className="ui center"><u>Time to get schwifty!</u></h1></center></Link>
      <div>
      <center><img
          className="main-img"
          src="https://p0.piqsels.com/preview/1003/989/262/rick-and-morty-action-figures.jpg"
          alt="rmfamily"
          /></center>   
      </div>
      </PrettyHeader>
    </header>
   
  );
}

