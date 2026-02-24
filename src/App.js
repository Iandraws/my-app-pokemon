import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";


import SearchForm from "./components/SearchForm";
import PokemonCard from "./components/PokemonCard";
import PokemonGrid from "./components/PokemonGrid";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage";
import PokemonDetailPage from "./pages/PokemonDetailPage";


  // Beim Start: Lade die ersten 20 Pokemon und zeige sie in einem Grid an
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

import { fetchPokemonData, fetchPokemonList } from "./services/pokemonService";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon/:name" element={<PokemonDetailPage />} />
      </Routes>
    </div>
  );
}
  

export default App;
