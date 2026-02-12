import React from "react";
import PokemonCard from "./PokemonCard";

function PokemonGrid({ pokemonList }) {
  if (!pokemonList || pokemonList.length === 0) {
    return null;
  }

  return (
    <div className="pokemon-grid">
      {pokemonList.map((pokemon, index) => (
        <PokemonCard key={pokemon.id || index} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonGrid;
