import React from "react";

function SearchForm({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchInput = e.target.pokemonInput.value;
    if (searchInput) {
      onSearch(searchInput);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        name="pokemonInput"
        placeholder="Pokemon Name eingeben..."
        className="search-input"
      />
      <button type="submit" className="search-button">
        Suchen
      </button>
    </form>
  );
}

export default SearchForm;
