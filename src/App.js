import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";

// Components
import SearchForm from "./components/SearchForm";
import PokemonCard from "./components/PokemonCard";
import PokemonGrid from "./components/PokemonGrid";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage";

// Services
import { fetchPokemonData, fetchPokemonList } from "./services/pokemonService";
import PokemonDetailPage from "./pages/PokemonDetailPage";

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
