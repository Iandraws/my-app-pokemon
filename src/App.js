import { useState, useEffect } from "react";
import "./App.css";

// Components
import SearchForm from "./components/SearchForm";
import PokemonCard from "./components/PokemonCard";
import PokemonGrid from "./components/PokemonGrid";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage";

// Services
import { fetchPokemonData, fetchPokemonList } from "./services/pokemonService";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Beim Start: Lade die ersten 20 Pokemon
  useEffect(() => {
    const loadInitialPokemon = async () => {
      setLoading(true);
      try {
        const list = await fetchPokemonList(20);
        setPokemonList(list);
      } catch (err) {
        setError("Konnte Pokemon-Liste nicht laden");
      } finally {
        setLoading(false);
      }
    };

    loadInitialPokemon();
  }, []);

  const handleSearch = async (pokemonName) => {
    setLoading(true);
    setError(null);
    setPokemon(null);

    try {
      const data = await fetchPokemonData(pokemonName);
      setPokemon(data);
      setPokemonList([]); // Liste ausblenden wenn gesucht wird
    } catch (err) {
      setError(err.message);
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="pokemon-container">
        <h1 className="title">🎮 Pokemon Finder 🎮</h1>

        <SearchForm onSearch={handleSearch} />

        {loading && <LoadingSpinner />}

        {error && <ErrorMessage message={error} />}

        {pokemon && <PokemonCard pokemon={pokemon} />}

        {!pokemon && !loading && <PokemonGrid pokemonList={pokemonList} />}
      </div>
    </div>
  );
}

export default App;
