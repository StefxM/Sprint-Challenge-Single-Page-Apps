import React from "react";
import styled from 'styled-components';

export default function WelcomePage() {
  const PrettyHeader = styled.header`
    background-color: black;
    color: purple;
  `;

  return (
    <section className="welcome-page">
      <header>
        <PrettyHeader>
        <h1>Welcome !!</h1>
        <center><img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        </center>
        </PrettyHeader>
      </header>
    </section>
  );
}
