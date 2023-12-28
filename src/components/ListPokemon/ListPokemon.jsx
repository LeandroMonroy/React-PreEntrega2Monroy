import React, { useState, useEffect } from "react";
import axios from "axios";
import CardPokemon from "../CardPokemon/CardPokemon";
import "./ListPokemon.css";

const ListPokemon = () => {
  const [chars, setChars] = useState([]);
  useEffect(() => {
    axios("https://pokeapi.co/api/v2/pokemon/").then((res) =>
      setChars(res.data.results)
    );
  }, []);
  return (
    <div className="card-list">
      {chars.map((char) => {
        return (
          <div key={char.id}>
            <CardPokemon char={char} />
          </div>
        );
      })}
    </div>
  );
};

export default ListPokemon;
