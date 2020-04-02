import React from "react";
import styled from "styled-components"




const CharacterCard = props => {
 
    /*const CardContainer = styled.div`
      display: flex;
      flex-wrap: wrap;
      background-color: green;
        
    `;*/

      const CardsDiv = styled.div`
        background-color: teal;
        color: purple;
        border: black 3px solid;
        width: 250px;
        align-items: center;
        justify-content: space-between;
        display: flex;
        flex-direction: column;
    `;

    const StyledImg = styled.img `
      width: 200px;
      height: 200px;
      object-fit: scale;
     `;

     
    return (//green, purple, orange, yellow,
      //<CardContainer className="cardContainer">
        <CardsDiv className="cards">
          <ol>
          <StyledImg alt="characters"src={props.image} />
          <h2>Name: {props.name}</h2>
          <p>{props.status}</p>
          <p>Species: {props.species}</p>
          </ol>
        </CardsDiv>
      //</CardContainer>
    );
    
  };

  

  export default CharacterCard;
  
