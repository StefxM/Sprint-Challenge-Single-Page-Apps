import React from "react";
//import styled from "styled-components"




const CharacterCard = props => {
 
    return (
      
      <div className="cards">
     
      <li>
        <img alt="characters"src={props.image}></img>
        <h2>Name: {props.name}</h2>
        <p>{props.status}</p>
        <p>Species: {props.species}</p>
      </li>
      
      </div>
    );
    
  };

  

  export default CharacterCard;
  
