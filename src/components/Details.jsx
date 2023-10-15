import {  useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PokemonCard from "./PokemonCard"
import axios from "axios"


const Details = () => {
const {name} = useParams()
const [pokemonDetails,setPokemonDetails] = useState({});

const urlPikatchu = 'https://pokeapi.co/api/v2/pokemon'

const getPokemon = (name) => {
  axios.get(`${urlPikatchu}/${name}`)
      .then(response => {
          const data = response.data;
          const src = data.sprites.other.dream_world.front_default;
          const stats = data.stats.map(stat => ({
              name: stat.stat.name,
              base: stat.base_stat,
          }));
          const type = data.types.map(({ type }) => type.name).join(" ");
          setPokemonDetails({ name, stats, src, type });
      })
      .catch(error => {
          console.error("You did not obtain the requested data:",error);
      });
};

useEffect(() => {
  getPokemon(name);
}, [name]);


/* const getPokemon = async (name) => {
  try {
      const response = await fetch(`${urlPikatchu}/${name}`);
      if (!response.ok) {
          throw new Error("Data not found");
      }

      const data = await response.json();
      const src = data.sprites.other.dream_world.front_default;
      const stats = data.stats.map((stat) => ({
          name: stat.stat.name,
          base: stat.base_stat,
      }));
      const type = data.types.map(({ type }) => type.name).join(" ");
      setPokemonDetails({ name, stats, src, type });
  } catch (error) {
      console.log(error.message);
  }
};

useEffect(() => {
  getPokemon(name);
}, [name]); */

  return (
    <PokemonCard pokemonDetails={pokemonDetails}></PokemonCard>
  )
}

export default Details