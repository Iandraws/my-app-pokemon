import React, { useState } from "react";

import { BrowserRouter } from "react-router-dom";
function PokemonCard({ pokemon }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`pokemon-card ${isOpen ? "open" : ""}`}
      onClick={toggleDetails}
      style={{ cursor: "pointer" }}
    >
      <h2 className="pokemon-name">{pokemon.name}</h2>
      <p className="pokemon-id">#{pokemon.id}</p>

      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="pokemon-image"
      />

      {/* 🔥 DETAILS DIREKT IN DER KARTE */}
      {isOpen && (
        <div className="pokemon-details">
          <img
            src={pokemon.sprites.back_default}
            alt={pokemon.name + " back"}
          />
          <img
            src={pokemon.sprites.front_shiny}
            alt={pokemon.name + " shiny"}
          />

          <p><strong>Größe:</strong> {pokemon.height / 10} m</p>
          <p><strong>Gewicht:</strong> {pokemon.weight / 10} kg</p>
          <p><strong>Basis-Erfahrung:</strong> {pokemon.base_experience}</p>
          <p><strong>Attacken:</strong> {pokemon.moves.length}</p>

          <div>
            <strong>Typen:</strong>
            {pokemon.types.map((type, index) => (
              <span key={index}> {type.type.name}</span>
            ))}
          </div>

          <div>
            <strong>Fähigkeiten:</strong>
            {pokemon.abilities.map((ability, index) => (
              <span key={index}> {ability.ability.name}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PokemonCard;
