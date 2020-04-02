import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

//import { Route, Link } from "react-router-dom";
//import styled from "styled-components"


function CharacterList() {
  //api
  const [rmcharacters, setrmCharacters] = useState([]);

    useEffect(() => {
      axios.get("https://rickandmortyapi.com/api/character/").then(response => { 
      //console.log(response.data.results);
      setrmCharacters(response.data.results);
      });
    }, []);

   //search bar 
    const [search, setSearch] = React.useState("");

    const handleChange = event => {
      setSearch(event.target.value);
    };

    const result = rmcharacters.filter(names => {
       const results = names.name.includes(search);
       return results; 
     
    })//end of search bar
    
//styled 
//const StyledApp = styled.Div`
//background-color: black;
//margin: 3%;`;
   

    return (
      <div className="App">
     
      <SearchForm value={search} onChange={handleChange} />
      
     
      {result.map(props =>{
        return (
          <CharacterCard
              key={props.id}
              image={props.image}
              name={props.name}
              status={props.status}
              species={props.species}       
              />      
        )
      })}
     
      </div>

    );


    
    }          

    
    export default CharacterList;

