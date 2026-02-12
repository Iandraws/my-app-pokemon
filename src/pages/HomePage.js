import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchPokemonList } from "../services/pokemonService";
import "../App.css";

function HomePage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadPokemon = async () => {
      setLoading(true);

      try {
        // 🎯 DEINE AUFGABE: Lade die Pokemon-Liste
        // Hint 1: Importiere fetchPokemonList von pokemonService (schon oben gemacht!)
        // Hint 2: Rufe die Funktion mit einer Zahl auf (wie viele Pokemon?)
        // Hint 3: Speichere das Ergebnis mit setPokemonList()
        // Hint 4: Vergiss nicht "await" - es ist eine async-Funktion!
      } catch (error) {
        console.error("Fehler beim Laden:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPokemon();
  }, []);

  if (loading) return <div className="loading">Lädt Pokemon...</div>;

  return (
    <div className="home-page">
      <h1 className="title">🎮 Pokemon Finder 🎮</h1>

      {/* 🎯 BONUS-AUFGABE: Suchfeld hinzufügen
          Schritt 1: Erstelle einen State für den Suchbegriff
          Schritt 2: Erstelle ein <input> Feld
          Schritt 3: Filtere pokemonList mit .filter() und .includes()
          
          📚 Was du wissen musst:
          - Wie erstellt man einen State? (Tipp: schau dir pokemonList an)
          - Wie bindet man ein input an einen State? (value & onChange)
          - Wie filtert man ein Array? (Array.filter() Methode)
      */}

      <div className="pokemon-grid">
        {pokemonList.map((pokemon) => (
          <Link
            key={pokemon.id}
            to={`/pokemon/${pokemon.name}`}
            className="pokemon-card-link"
          >
            <div className="pokemon-card">
              <h2 className="pokemon-name">{pokemon.name}</h2>
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="pokemon-image"
              />
              <p className="pokemon-id">#{pokemon.id}</p>

              {/* 🎯 AUFGABE: Zeige auch den Typ des Pokemon
                  Frage: Wie zeigt man die Typen im PokemonCard.js?
                  Hint 1: Schau in components/PokemonCard.js wie Typen angezeigt werden
                  Hint 2: Du brauchst ein <div> mit className="pokemon-types"
                  Hint 3: Nutze pokemon.types.map() um durch alle Typen zu loopen
                  Hint 4: Jeder Typ braucht einen <span> mit der richtigen CSS-Klasse
              */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
