import React, { useEffect, useState } from "react";
import axios from 'axios';


export default function CharacterList = props => {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    const getCharacters = () => {
      axios 
      .get("https://rick-api.herokuapp.com/api/").then(response => {
      console.log(response);  
      setCharacters(response.data);
       console.log(response);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }

    getCharacters();
  }, []);
      
        //getCharacters();
    
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

  return (
    <section className="character-list">
  
    </section>
  );
}



