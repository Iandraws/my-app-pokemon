import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchPokemonData } from "../services/pokemonService";

function PokemonDetailPage() {
  const { name } = useParams(); // Holt ":name" aus der URL
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadPokemonDetail = async () => {
      setLoading(true);
      const data = await fetchPokemonData(name);
      setPokemon(data);

      // 🎯 DEINE AUFGABE: Fetch die Pokemon-Daten
      // Hint: Nutze fetchPokemonData(name)
      // Speichere das Ergebnis in setPokemon()

      setLoading(false);
    };

    loadPokemonDetail();
  }, [name]); // Neu laden wenn sich der Name ändert

  if (loading) return <div className="loading">Lädt {name}...</div>;
  if (!pokemon) return <div>Pokemon nicht gefunden!</div>;

  return (
    <div className="detail-page">
      <Link to="/" className="back-button">
        ← Zurück zur Liste
      </Link>

      <div className="pokemon-detail">
        <h1>{pokemon.name}</h1>
        <p className="pokemon-id">#{pokemon.id}</p>

        <div className="pokemon-images">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <img
            src={pokemon.sprites.back_default}
            alt={pokemon.name + " back"}
          />
          <img
            src={pokemon.sprites.front_shiny}
            alt={pokemon.name + " shiny"}
          />
        </div>

        <div className="pokemon-info">
          <p>
            <strong>Größe:</strong> {pokemon.height / 10} m
          </p>
          <p>
            <strong>Gewicht:</strong> {pokemon.weight / 10} kg
          </p>
          <p>
            <strong>Basis-Erfahrung:</strong> {pokemon.base_experience}
          </p>

          <div className="pokemon-types">
            {pokemon.types.map((type) => (
        <p className="type-badge">
            <strong> {type.type.name}
              {type.type.name}
            </strong>
          </p>
  
    ))}
        </div>
          


          {/* 🎯 DEINE AUFGABE: Füge mehr Infos hinzu!
              - Typen (types)
              - Fähigkeiten (abilities)
              - Stats (stats)
              - Attacken-Anzahl (moves.length)
          */}
        </div>
      </div>
    </div>
  );
}

export default PokemonDetailPage;