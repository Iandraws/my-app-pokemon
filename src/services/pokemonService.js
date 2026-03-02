// API Service für Pokemon-Daten

const BASE_URL = "https://pokeapi.co/api/v2";

/**
 * Holt Pokemon-Daten von der PokeAPI
 * @param {string} pokemonName - Name oder ID des Pokemon
 * @returns {Promise<Object>} Pokemon-Daten
 */
export const fetchPokemonData = async (pokemonName) => {
  const response = await fetch(
    `${BASE_URL}/pokemon/${pokemonName.toLowerCase()}`,
  );

  if (!response.ok) {
    throw new Error("Pokemon nicht gefunden!");
  }

  const data = await response.json();
  return data;
};

/**
 * Holt ein zufälliges Pokemon (1-150)
 * @returns {Promise<Object>} Pokemon-Daten
 */
export const fetchRandomPokemon = async () => {
  const randomId = Math.floor(Math.random() * 150) + 1;
  return fetchPokemonData(randomId.toString());
};

/**
 * Holt eine Liste von Pokemon
 * @param {number} limit - Anzahl der Pokemon (Standard: 20)
 * @returns {Promise<Array>} Array mit Pokemon-Daten
 */
export const fetchPokemonList = async (limit = 20) => {
  const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}`);
  const data = await response.json();
  console.log (data)

  // Für jedes Pokemon die Details holen
  const pokemonDetails = await Promise.all(
    data.results.map((pokemon) => fetchPokemonData(pokemon.name)),
  );

  return pokemonDetails;
};
