import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchPokemonList } from "../services/pokemonService";


function HomePage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadPokemon = async () => {
      setLoading(true);
      const list = await fetchPokemonList(20);
      setPokemonList(list);
      setLoading(false);
    };
    loadPokemon();
  }, []);

  if (loading) return <div className="loading">Lädt Pokemon...</div>;

  return (
    <div className="home-page">
      <h1 className="title">🎮 Pokemon Finder 🎮</h1>

      <div className="pokemon-grid">
        {pokemonList.map((pokemon) => (
          <Link
            key={pokemon.id}
            to={`/pokemon/${pokemon.name}`}
            className="pokemon-card-link"
          >
            <div className="pokemon-card">
              <h2>{pokemon.name}</h2>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <p>#{pokemon.id}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;