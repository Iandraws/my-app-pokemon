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
