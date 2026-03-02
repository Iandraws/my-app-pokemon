import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchPokemonData } from "../services/pokemonService";

function PokemonDetailPage() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const imageRef = useRef(null);

  
  useEffect(() => {
    const loadPokemonDetail = async () => {
      setLoading(true);
      try {
        const data = await fetchPokemonData(name);
        setPokemon(data);
      } catch (error) {
        console.error("Fehler beim Laden:", error);
        setPokemon(null);
      }
      setLoading(false);
    };
    loadPokemonDetail();
  }, [name]);


  const openFullscreen = (imgElement) => {
    if (imgElement.requestFullscreen) {
      imgElement.requestFullscreen();
    } else if (imgElement.webkitRequestFullscreen) {
      imgElement.webkitRequestFullscreen(); 
    } else if (imgElement.msRequestFullscreen) {
      imgElement.msRequestFullscreen(); 
    }
  };

  if (loading) return <div className="loading">Lädt {name}...</div>;
  if (!pokemon) return <div>Pokemon nicht gefunden!</div>;

  return (
    <div className="detail-page">
      <Link to="/" className="back-button">
        ← Zurück zur Liste
      </Link>

      <div className="pokemon-detail">
        <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
        <p className="pokemon-id">#{pokemon.id}</p>

        <div className="pokemon-images">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            onClick={(e) => openFullscreen(e.target)}
          />
          <img
            src={pokemon.sprites.back_default}
            alt={pokemon.name + " back"}
            onClick={(e) => openFullscreen(e.target)}
          />
          <img
            src={pokemon.sprites.front_shiny}
            alt={pokemon.name + " shiny"}
            onClick={(e) => openFullscreen(e.target)}
          />
        </div>

        <div className="pokemon-info">
          <p><strong>Größe:</strong> {pokemon.height / 10} m</p>
          <p><strong>Gewicht:</strong> {pokemon.weight / 10} kg</p>
          <p><strong>Basis-Erfahrung:</strong> {pokemon.base_experience}</p>

          <p>
            <strong>Typen:</strong>{" "}
            {pokemon.types.map((typeObj) => {
              const typeName = typeObj.type.name;
              return (
                <span key={typeName} className={`pokemon-type type-${typeName}`}>
                  {typeName.charAt(0).toUpperCase() + typeName.slice(1)}
                </span>
              );
            })}
          </p>

          <p>
            <strong>Fähigkeiten:</strong>{" "}
            {pokemon.abilities.map((ability) => ability.ability.name).join(", ")}
          </p>

          <p><strong>Anzahl Attacken:</strong> {pokemon.moves.length}</p>

          <div>
            <strong>Stats:</strong>
            <ul>
              {pokemon.stats.map((stat) => (
                <li key={stat.stat.name}>
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetailPage;
