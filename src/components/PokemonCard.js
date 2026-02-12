import React from "react";

function PokemonCard({ pokemon }) {
  return (
    <div className="pokemon-card">
      <h2 className="pokemon-name">{pokemon.name}</h2>

      {/* 🎯 AUFGABE 1: Pokemon-ID anzeigen
          Hint: Füge hier ein <p> Tag ein mit: #{pokemon.id}
          Beispiel: <p className="pokemon-id">#{pokemon.id}</p>
      */}

      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="pokemon-image"
      />

      {/* 🎯 AUFGABE 5 & 6: Mehr Bilder anzeigen
          Hint: Füge hier weitere <img> Tags ein für:
          - Rückseite: pokemon.sprites.back_default
          - Shiny: pokemon.sprites.front_shiny
          Beispiel: <img src={pokemon.sprites.back_default} alt={pokemon.name + " back"} className="pokemon-image" />
      */}

      <div className="pokemon-info">
        <p>
          <strong>Größe:</strong> {pokemon.height / 10} m
        </p>
        <p>
          <strong>Gewicht:</strong> {pokemon.weight / 10} kg
        </p>

        {/* 🎯 AUFGABE 2: Basis-Erfahrung anzeigen
            Hint: Kopiere die Zeile oben und ändere sie zu:
            <p><strong>Basis-Erfahrung:</strong> {pokemon.base_experience}</p>
        */}

        {/* 🎯 AUFGABE 4: Anzahl der Attacken anzeigen
            Hint: Füge hier ein:
            <p><strong>Attacken:</strong> Kann {pokemon.moves.length} Attacken lernen</p>
        */}

        <div className="pokemon-types">
          <strong>Typen:</strong>
          {pokemon.types.map((type, index) => (
            <span key={index} className={`type-badge ${type.type.name}`}>
              {type.type.name}
            </span>
          ))}
        </div>

        {/* 🎯 AUFGABE 3: Fähigkeiten anzeigen
            Hint: Kopiere den Code von pokemon-types oben und ändere:
            - className zu "pokemon-abilities"
            - pokemon.types zu pokemon.abilities
            - type.type.name zu ability.ability.name
            - className="type-badge" zu className="ability-badge"
            
            Beispiel:
            <div className="pokemon-abilities">
              <strong>Fähigkeiten:</strong>
              {pokemon.abilities.map((ability, index) => (
                <span key={index} className="ability-badge">
                  {ability.ability.name}
                </span>
              ))}
            </div>
        */}
      </div>
    </div>
  );
}

export default PokemonCard;
