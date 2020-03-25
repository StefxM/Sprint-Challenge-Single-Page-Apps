import React from "react";
//import styled from "styled-components"

const CharacterCard = props => {

   /* const PrettyCard = styled.div`
    background-color: black;
    color: green;
    `;*/

    return (
      
      <div>
      <li className="character-card" key={props.id}>
        <img src={props.image}></img>
        <h2>Name: {props.name}</h2>
        <p>{props.status}</p>
        <p>Species: {props.species}</p>
      </li>
      </div>
    );
    
  };

  

  export default CharacterCard;
  
