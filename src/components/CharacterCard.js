import React from "react";

export default function CharacterCard() {
  
  return <span>todo: character</span>;
}

function CharacterDetails({ character }) {
  const { name, status, species } = character;
  return (
    <div className="character-card">
      <h1>{name}</h1>
      <p><u>Status:</u></p>
    </div>
    
  )
}
