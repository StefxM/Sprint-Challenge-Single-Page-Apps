import React from "react";
import styled from 'styled-components';
import Header from './Header';
import CharacterList from './CharacterList';

export default function WelcomePage() {
  <h1><u>Time to get schwifty!</u></h1>
  <img src="./mortybackground.jpg"></img>

  const PrettyHeader = styled.header`
    background-color: black;
    color: purple;
  `;

  return (//<PrettyHeader> 
    <section className="welcome-page">
      <header>
        <PrettyHeader/>
          <Header/>
          <nav>
      <Link to="/characterList" component={CharacterList} />
      </nav>
      <Route exact path="/characterList" component={CharacterList} />
        <PrettyHeader/>
      </header>
    </section>
  );
}
