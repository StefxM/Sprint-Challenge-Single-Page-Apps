import React from "react";

const CharacterCard = props => {
    return (
      <li className="character-card" key={props.id}>
        <img src={props.image}></img>
        <h2>Name: {props.name}</h2>
        <p>{props.status}</p>
        <p>Species: {props.species}</p>
      </li>
    );
  };
  export default CharacterCard;
  
