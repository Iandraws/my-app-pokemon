import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchPokemonData } from "../services/pokemonService";

function PokemonDetailPage() {
  const { name } = useParams(); // Holt den Pokemon-Namen aus der URL
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadPokemonDetail = async () => {
      setLoading(true);

      try {
        // 🎯 DEINE AUFGABE: Implementiere den Fetch-Call
        // Frage 1: Welche Funktion holt ein einzelnes Pokemon? (Schau im Import!)
        // Frage 2: Was braucht diese Funktion als Parameter?
        // Frage 3: Wie speichert man das Ergebnis? (Welcher State?)
        // 
        // 📝 Schritte:
        // 1. Rufe die richtige Service-Funktion auf
        // 2. Vergiss nicht "await" (warum ist das wichtig?)
        // 3. Speichere das Ergebnis in einer Variable
        // 4. Setze den State mit dem Ergebnis
        
      } catch (error) {
        console.error("Fehler beim Laden:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPokemonDetail();
  }, [name]); // Neu laden wenn sich der Name ändert

  if (loading) return <div className="loading">Lädt {name}...</div>;
  if (!pokemon) return <div className="error">Pokemon nicht gefunden!</div>;

  return (
    <div className="detail-page">
      <Link to="/" className="back-button">
        ← Zurück zur Liste
      </Link>

      <div className="pokemon-detail">
        <h1>{pokemon.name}</h1>
        <p className="pokemon-id">#{pokemon.id}</p>

        <div className="pokemon-images">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />

          {/* 🎯 AUFGABE 1: Zeige mehr Bilder
              Frage: Welche Bilder gibt es noch im sprites-Objekt?
              
              💡 Tipp: Schau in der Browser-Konsole (F12):
              - console.log(pokemon.sprites)
              
              Dann füge weitere <img> Tags hinzu für:
              - Rückseite des Pokemon
              - Shiny-Version (glitzernd)
              
              Denk dran: Jedes <img> braucht src und alt!
          */}
        </div>

        <div className="pokemon-info">
          <h2>Basis-Informationen</h2>
          <p>
            <strong>Größe:</strong> {pokemon.height / 10} m
          </p>
          <p>Frage: Wie hast du die Typen auf der HomePage angezeigt?
              
              Schritt 1: Erstelle ein <div> mit className "pokemon-types"
              Schritt 2: Nutze .map() um durch pokemon.types zu loopen
              Schritt 3: Für jeden Typ: erstelle einen <span> mit der type-badge Klasse
              
              ❓ Was ist pokemon.types? (Array oder Objekt?)
              ❓ Was muss bei .map() in die Klammern?
              ❓ Vergiss nicht: key={index} für React!
          */}

          {/* 🎯 AUFGABE 3: Fähigkeiten anzeigen
              💭 Denke nach: Ist das ähnlich wie Typen oder ganz anders?
              
              Unterschiede zu Typen:
              - Die Daten liegen in pokemon.abilities
              - Der Name liegt in ability.ability.name (verschachtelt!)
              - Du könntest className="ability-badge" nutzen (statt type-badge)
              
              Probiere es selbst! Es ist fast wie Aufgabe 2.
          */}

          {/* 🎯 AUFGABE 4: Stats/Statistiken anzeigen
              Was sind Stats? HP, Attack, Defense, Speed usw.
              
              🔍 Erforsche zuerst:
              - console.log(pokemon.stats) in der Browser-Konsole
              - Welche Struktur haben die Daten?
              - Wo liegt der Name des Stats?
              - Wo liegt der Wert?
              
              📝 Dann baue:
              - Ein <div> Container mit Überschrift "Statistiken"
              - Loope durch pokemon.stats mit .map()
              - Zeige stat.stat.name und stat.base_stat
              
              💡 Es gibt CSS-Klassen: .pokemon-stats, .stat-item, .stat-name, .stat-value
          */}

          {/* 🎯 AUFGABE 5: Anzahl der Moves/Attacken
              🤔 Frage: Wie zeigt man die LÄNGE eines Arrays?
              
              Tipp: pokemon.moves ist ein Array
              Was du brauchst: Eine Array-Eigenschaft die die Anzahl zeigt
              
              Erstelle ein <p> Tag mit der Anzahl!
          */}
        </div>

        {/* 🎯 BONUS-AUFGABE: Navigation zu vorherigem/nächstem Pokemon
            💭 Überlege:
            - Wie bekommst du die ID des vorherigen Pokemon? (Rechnen!)
            - Wie bekommst du die ID des nächsten Pokemon?
            - Was ist wenn Pokemon #1 angezeigt wird? (Gibt es #0?)
            
            Schritte:
            1. Berechne prevId und nextId (mit + oder -)
            2. Nutze <Link> Component (schon importiert!)
            3. Link URL muss sein: /pokemon/ID_HIER
            4. Für prevId: Zeige den Button nur wenn die ID > 0 ist
               (Tipp: {BEDINGUNG && <Element>})
            
            CSS ist schon fertig: .pokemon-navigation und .nav-button
        */}
      </div>
    </div>
  );
}

export default PokemonDetailPage;
