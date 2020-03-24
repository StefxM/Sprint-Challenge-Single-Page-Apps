import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

function CharacterList() {
  const [rmcharacters, setrmCharacters] = useState([]);

    useEffect(() => {
      axios.get("https://rickandmortyapi.com/api/character/").then(response => { 
      //console.log(response.data.results);
      setrmCharacters(response.data.results);
      });
    }, []);
    
    const [search, setSearch] = React.useState("");

    const handleChange = event => {
      setSearch(event.target.value);
    };

    const result = rmcharacters.filter(names => {
      return names.startsWith(search);
    })
    

    return (
      <div className="App">
      {rmcharacters.map(props =>{
        console.log(props);
        return (
          <CharacterCard
              id={props.id}
              image={props.image}
              name={props.name}
              status={props.status}
              species={props.species}
                />
        )
      })}
      <SearchForm value={search} onChange={handleChange} />
      <CharacterCard rmcharacters={result} />
      </div>

    );
    }          

    export default CharacterList;

