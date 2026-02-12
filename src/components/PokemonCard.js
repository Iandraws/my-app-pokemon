import React from "react";

function PokemonCard({ pokemon }) {
  return (
    <div className="pokemon-card">
      <h2 className="pokemon-name">{pokemon.name}</h2>

      {/* 🎯 AUFGABE 1: Pokemon-ID anzeigen
          📝 Was du machen sollst: Zeige die Pokemon-Nummer (z.B. #25)
          
          Hints:
          - Nutze ein <p> Tag
          - className sollte sein: "pokemon-id"
          - Zeige ein # Symbol vor der Nummer
          - Die ID liegt in: pokemon.___ (welche Eigenschaft?)
          - Schau wie der Name oben angezeigt wird!
      */}

      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="pokemon-image"
      />

      {/* 🎯 AUFGABE 5 & 6: Mehr Bilder anzeigen
          📝 Was du machen sollst: Zeige Rückseite und Shiny-Version
          
          Hints:
          - Kopiere das <img> Tag von oben
          - Ändere nur den src Wert:
            - Rückseite: pokemon.sprites.back_____ (?
            - Shiny: pokemon.sprites.front_____ (glitzernd auf Englisch?)
          - Passe das alt Attribut an (z.B. "hinten" oder "shiny")
          
          💡 Bonus: Wickle alle Bilder in <div className="pokemon-images"> für Layout!
      */}

      <div className="pokemon-info">
        <p>
          <strong>Größe:</strong> {pokemon.height / 10} m
        </p>
        <p>
          <strong>Gewicht:</strong> {pokemon.weight / 10} kg
        </p>

        {/* 🎯 AUFGABE 2: Basis-Erfahrung anzeigen
            📝 Was du machen sollst: Zeige base_experience an
            
            Hints:
            - Kopiere eine <p> Zeile von oben (Größe oder Gewicht)
            - Ändere den Text zu "Basis-Erfahrung:"
            - Die Eigenschaft heißt: pokemon.base_experience
            - Struktur: <p><strong>Label</strong> {pokemon.___}</p>
        */}

        {/* 🎯 AUFGABE 4: Anzahl der Attacken anzeigen
            📝 Was du machen sollst: Zeige wie viele Attacken das Pokemon kann
            
            Hints:
            - Erstelle ein <p> Tag wie bei den anderen Infos
            - pokemon.moves ist ein Array mit allen Attacken
            - Frage: Wie bekommt man die LÄNGE eines Arrays?
            - Tipp: Arrays haben eine .length Eigenschaft!
            - Text: "Kann ___ Attacken lernen" (fülle die Lücke)
        */}

        <div className="pokemon-types">
          <strong>Typen:</strong>
          {pokemon.types.map((type, index) => (
            <span key={index} className={`type-badge ${type.type.name}`}>
              {type.type.name}
            </span>
          ))}
        </div>

        {/* 🎯 AUFGABE 3: Fähigkeiten anzeigen
            📝 Was du machen sollst: Zeige alle abilities
            
            Hints:
            - 🤔 Ist das ähnlich wie die Typen oben?
            - Kopiere den kompletten pokemon-types <div> Block
            - Ändere diese Dinge:
              1. className von "pokemon-types" → "pokemon-______" (abilities!)
              2. Text von "Typen:" → "Fähigkeiten:"
              3. Array von pokemon.types → pokemon.______
              4. Variable name von "type" → "ability"
              5. Badge className von "type-badge" → "ability-badge"
              6. Der Name liegt verschachtelt: ability.ability.name
            
            💡 Tipp: Vergleiche Schritt für Schritt mit dem Typen-Code!
        */}
      </div>
    </div>
  );
}

export default PokemonCard;
